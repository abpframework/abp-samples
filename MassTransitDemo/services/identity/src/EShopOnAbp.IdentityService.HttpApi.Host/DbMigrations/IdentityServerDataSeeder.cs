using IdentityServer4.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.Abp.Identity;
using Volo.Abp.IdentityServer.ApiResources;
using Volo.Abp.IdentityServer.ApiScopes;
using Volo.Abp.IdentityServer.Clients;
using Volo.Abp.IdentityServer.IdentityResources;
using Volo.Abp.MultiTenancy;
using Volo.Abp.PermissionManagement;
using Volo.Abp.Uow;
using ApiResource = Volo.Abp.IdentityServer.ApiResources.ApiResource;
using ApiScope = Volo.Abp.IdentityServer.ApiScopes.ApiScope;
using Client = Volo.Abp.IdentityServer.Clients.Client;

namespace EShopOnAbp.IdentityService.DbMigrations;

public class IdentityServerDataSeeder : IDataSeedContributor, ITransientDependency
{
    private readonly IApiResourceRepository _apiResourceRepository;
    private readonly IApiScopeRepository _apiScopeRepository;
    private readonly IClientRepository _clientRepository;
    private readonly IIdentityResourceDataSeeder _identityResourceDataSeeder;
    private readonly IGuidGenerator _guidGenerator;
    private readonly IPermissionDataSeeder _permissionDataSeeder;
    private readonly IConfiguration _configuration;
    private readonly ICurrentTenant _currentTenant;

    public IdentityServerDataSeeder(
        IClientRepository clientRepository,
        IApiResourceRepository apiResourceRepository,
        IApiScopeRepository apiScopeRepository,
        IIdentityResourceDataSeeder identityResourceDataSeeder,
        IGuidGenerator guidGenerator,
        IPermissionDataSeeder permissionDataSeeder,
        IConfiguration configuration,
        ICurrentTenant currentTenant)
    {
        _clientRepository = clientRepository;
        _apiResourceRepository = apiResourceRepository;
        _apiScopeRepository = apiScopeRepository;
        _identityResourceDataSeeder = identityResourceDataSeeder;
        _guidGenerator = guidGenerator;
        _permissionDataSeeder = permissionDataSeeder;
        _configuration = configuration;
        _currentTenant = currentTenant;
    }

    public virtual Task SeedAsync(DataSeedContext context)
    {
        return SeedAsync();
    }

    [UnitOfWork]
    public virtual async Task SeedAsync()
    {
        using (_currentTenant.Change(null))
        {
            await _identityResourceDataSeeder.CreateStandardResourcesAsync();
            await CreateApiResourcesAsync();
            await CreateApiScopesAsync();
            await CreateSwaggerClientsAsync();
            await CreateClientsAsync();
        }
    }

    private async Task CreateApiResourcesAsync()
    {
        var commonApiUserClaims = new[]
        {
            "email",
            "email_verified",
            "name",
            "phone_number",
            "phone_number_verified",
            "role"
        };

        await CreateApiResourceAsync("AccountService", commonApiUserClaims);
        await CreateApiResourceAsync("IdentityService", commonApiUserClaims);
        await CreateApiResourceAsync("AdministrationService", commonApiUserClaims);
        await CreateApiResourceAsync("CatalogService", commonApiUserClaims);
        await CreateApiResourceAsync("BasketService", commonApiUserClaims);
        await CreateApiResourceAsync("OrderingService", commonApiUserClaims);
        await CreateApiResourceAsync("PaymentService", commonApiUserClaims);
    }

    private async Task CreateApiScopesAsync()
    {
        await CreateApiScopeAsync("AccountService");
        await CreateApiScopeAsync("IdentityService");
        await CreateApiScopeAsync("AdministrationService");
        await CreateApiScopeAsync("CatalogService");
        await CreateApiScopeAsync("BasketService");
        await CreateApiScopeAsync("OrderingService");
        await CreateApiScopeAsync("PaymentService");
    }

    private async Task CreateSwaggerClientsAsync()
    {
        await CreateWebGatewaySwaggerClientAsync("WebGateway",
            new[]
            {
                "AccountService",
                "IdentityService",
                "AdministrationService",
                "CatalogService",
                "BasketService",
                "PaymentService",
                "OrderingService"
            });
    }

    private async Task CreateWebGatewaySwaggerClientAsync(string name, string[] scopes = null)
    {
        var commonScopes = new[]
        {
            "email",
            "openid",
            "profile",
            "role",
            "phone",
            "address"
        };
        scopes ??= new[] { name };

        // Swagger Client
        var swaggerClientId = $"{name}_Swagger";
        if (!swaggerClientId.IsNullOrWhiteSpace())
        {
            var webGatewaySwaggerRootUrl = _configuration[$"IdentityServerClients:{name}:RootUrl"].TrimEnd('/');
            var publicWebGatewayRootUrl = _configuration[$"IdentityServerClients:PublicWebGateway:RootUrl"].TrimEnd('/');
            var accountServiceRootUrl = _configuration[$"IdentityServerClients:AccountService:RootUrl"].TrimEnd('/');
            var identityServiceRootUrl = _configuration[$"IdentityServerClients:IdentityService:RootUrl"].TrimEnd('/');
            var administrationServiceRootUrl = _configuration[$"IdentityServerClients:AdministrationService:RootUrl"].TrimEnd('/');
            var catalogServiceRootUrl = _configuration[$"IdentityServerClients:CatalogService:RootUrl"].TrimEnd('/');
            var basketServiceRootUrl = _configuration[$"IdentityServerClients:BasketService:RootUrl"].TrimEnd('/');
            var orderingServiceRootUrl = _configuration[$"IdentityServerClients:OrderingService:RootUrl"].TrimEnd('/');
            var paymentServiceRootUrl = _configuration[$"IdentityServerClients:PaymentService:RootUrl"].TrimEnd('/');

            await CreateClientAsync(
                name: swaggerClientId,
                scopes: commonScopes.Union(scopes),
                grantTypes: new[] { "authorization_code" },
                secret: "1q2w3e*".Sha256(),
                requireClientSecret: false,
                redirectUris: new List<string>
                {
                    $"{webGatewaySwaggerRootUrl}/swagger/oauth2-redirect.html", // WebGateway redirect uri
                    $"{publicWebGatewayRootUrl}/swagger/oauth2-redirect.html", // PublicWebGateway redirect uri
                    $"{accountServiceRootUrl}/swagger/oauth2-redirect.html", // AccountService redirect uri
                    $"{identityServiceRootUrl}/swagger/oauth2-redirect.html", // IdentityService redirect uri
                    $"{administrationServiceRootUrl}/swagger/oauth2-redirect.html", // AdministrationService redirect uri
                    $"{catalogServiceRootUrl}/swagger/oauth2-redirect.html", // CatalogService redirect uri
                    $"{basketServiceRootUrl}/swagger/oauth2-redirect.html", // BasketService redirect uri
                    $"{orderingServiceRootUrl}/swagger/oauth2-redirect.html", // OrderingService redirect uri
                    $"{paymentServiceRootUrl}/swagger/oauth2-redirect.html" // PaymentService redirect uri
                },
                corsOrigins: new[]
                {
                    webGatewaySwaggerRootUrl.RemovePostFix("/"),
                    publicWebGatewayRootUrl.RemovePostFix("/"),
                    accountServiceRootUrl.RemovePostFix("/"),
                    identityServiceRootUrl.RemovePostFix("/"),
                    administrationServiceRootUrl.RemovePostFix("/"),
                    catalogServiceRootUrl.RemovePostFix("/"),
                    basketServiceRootUrl.RemovePostFix("/"),
                    orderingServiceRootUrl.RemovePostFix("/"),
                    paymentServiceRootUrl.RemovePostFix("/")
                }
            );
        }
    }

    private async Task<ApiResource> CreateApiResourceAsync(string name, IEnumerable<string> claims)
    {
        var apiResource = await _apiResourceRepository.FindByNameAsync(name);
        if (apiResource == null)
        {
            apiResource = await _apiResourceRepository.InsertAsync(
                new ApiResource(
                    _guidGenerator.Create(),
                    name,
                    name + " API"
                ),
                autoSave: true
            );
        }

        foreach (var claim in claims)
        {
            if (apiResource.FindClaim(claim) == null)
            {
                apiResource.AddUserClaim(claim);
            }
        }

        return await _apiResourceRepository.UpdateAsync(apiResource);
    }

    private async Task<ApiScope> CreateApiScopeAsync(string name)
    {
        var apiScope = await _apiScopeRepository.FindByNameAsync(name);
        if (apiScope == null)
        {
            apiScope = await _apiScopeRepository.InsertAsync(
                new ApiScope(
                    _guidGenerator.Create(),
                    name,
                    name + " API"
                ),
                autoSave: true
            );
        }

        return apiScope;
    }

    private async Task CreateClientsAsync()
    {
        var commonScopes = new[]
        {
            "email",
            "openid",
            "profile",
            "role",
            "phone",
            "address"
        };

        //Public Web Client
        var publicWebClientRootUrl = _configuration["IdentityServerClients:PublicWeb:RootUrl"]
            .EnsureEndsWith('/');
        await CreateClientAsync(
            name: "PublicWeb",
            scopes: commonScopes.Union(new[]
            {
                "AccountService",
                "AdministrationService",
                "CatalogService",
                "BasketService",
                "PaymentService",
                "OrderingService"
            }),
            grantTypes: new[] { "hybrid" },
            secret: "1q2w3e*".Sha256(),
            redirectUris: new List<string> { $"{publicWebClientRootUrl}signin-oidc" },
            postLogoutRedirectUri: $"{publicWebClientRootUrl}signout-callback-oidc",
            frontChannelLogoutUri: $"{publicWebClientRootUrl}Account/FrontChannelLogout",
            corsOrigins: new[] { publicWebClientRootUrl.RemovePostFix("/") }
        );

        //Angular Client
        var angularClientRootUrl =
            _configuration["IdentityServerClients:Web:RootUrl"].TrimEnd('/');
        await CreateClientAsync(
            name: "Web",
            scopes: commonScopes.Union(new[]
            {
                "AccountService",
                "IdentityService",
                "AdministrationService",
                "CatalogService",
                "OrderingService"
            }),
            grantTypes: new[] { "authorization_code", "LinkLogin", "password" },
            secret: "1q2w3e*".Sha256(),
            requirePkce: true,
            requireClientSecret: false,
            redirectUris: new List<string> { $"{angularClientRootUrl}" },
            postLogoutRedirectUri: $"{angularClientRootUrl}",
            corsOrigins: new[] { angularClientRootUrl }
        );

        //Administration Service Client
        await CreateClientAsync(
            name: "EShopOnAbp_AdministrationService",
            scopes: commonScopes.Union(new[]
            {
                "IdentityService"
            }),
            grantTypes: new[] { "client_credentials" },
            secret: "1q2w3e*".Sha256(),
            permissions: new[] { IdentityPermissions.Users.Default }
        );
    }

    private async Task<Client> CreateClientAsync(
        string name,
        IEnumerable<string> scopes,
        IEnumerable<string> grantTypes,
        string secret = null,
        List<string> redirectUris = null,
        string postLogoutRedirectUri = null,
        string frontChannelLogoutUri = null,
        bool requireClientSecret = true,
        bool requirePkce = false,
        IEnumerable<string> permissions = null,
        IEnumerable<string> corsOrigins = null)
    {
        var client = await _clientRepository.FindByClientIdAsync(name);
        if (client == null)
        {
            client = await _clientRepository.InsertAsync(
                new Client(
                    _guidGenerator.Create(),
                    name
                )
                {
                    ClientName = name,
                    ProtocolType = "oidc",
                    Description = name,
                    AlwaysIncludeUserClaimsInIdToken = true,
                    AllowOfflineAccess = true,
                    AbsoluteRefreshTokenLifetime = 31536000, //365 days
                    AccessTokenLifetime = 31536000, //365 days
                    AuthorizationCodeLifetime = 300,
                    IdentityTokenLifetime = 300,
                    RequireConsent = false,
                    FrontChannelLogoutUri = frontChannelLogoutUri,
                    RequireClientSecret = requireClientSecret,
                    RequirePkce = requirePkce
                },
                autoSave: true
            );
        }

        foreach (var scope in scopes)
        {
            if (client.FindScope(scope) == null)
            {
                client.AddScope(scope);
            }
        }

        foreach (var grantType in grantTypes)
        {
            if (client.FindGrantType(grantType) == null)
            {
                client.AddGrantType(grantType);
            }
        }

        if (!secret.IsNullOrEmpty())
        {
            if (client.FindSecret(secret) == null)
            {
                client.AddSecret(secret);
            }
        }

        if (redirectUris != null)
        {
            foreach (var redirectUri in redirectUris)
            {
                if (redirectUri != null)
                {
                    if (client.FindRedirectUri(redirectUri) == null)
                    {
                        client.AddRedirectUri(redirectUri);
                    }
                }
            }
        }

        if (postLogoutRedirectUri != null)
        {
            if (client.FindPostLogoutRedirectUri(postLogoutRedirectUri) == null)
            {
                client.AddPostLogoutRedirectUri(postLogoutRedirectUri);
            }
        }

        if (permissions != null)
        {
            await _permissionDataSeeder.SeedAsync(
                ClientPermissionValueProvider.ProviderName,
                name,
                permissions,
                null
            );
        }

        if (corsOrigins != null)
        {
            foreach (var origin in corsOrigins)
            {
                if (!origin.IsNullOrWhiteSpace() && client.FindCorsOrigin(origin) == null)
                {
                    client.AddCorsOrigin(origin);
                }
            }
        }

        return await _clientRepository.UpdateAsync(client);
    }
}