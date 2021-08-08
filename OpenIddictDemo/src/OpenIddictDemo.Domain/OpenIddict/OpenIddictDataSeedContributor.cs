using Microsoft.Extensions.Configuration;
using OpenIddict.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.MultiTenancy;
using Volo.Abp.OpenIddict.Applications;
using Volo.Abp.OpenIddict.Scopes;
using Volo.Abp.PermissionManagement;
using Volo.Abp.Uow;
using static OpenIddict.Abstractions.OpenIddictConstants;

namespace OpenIddictDemo.OpenIddict
{
    public class OpenIddictDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly IPermissionDataSeeder _permissionDataSeeder;
        private readonly IPermissionDefinitionManager _permissionDefinitionManager;
        private readonly IConfiguration _configuration;
        private readonly ICurrentTenant _currentTenant;
        private readonly IOpenIddictApplicationManager _applicationManager;
        private readonly IOpenIddictScopeManager _scopeManager;

        public OpenIddictDataSeedContributor(
            IPermissionDataSeeder permissionDataSeeder,
            IPermissionDefinitionManager permissionDefinitionManager,
            IConfiguration configuration,
            ICurrentTenant currentTenant,
            IOpenIddictApplicationManager applicationManager,
            IOpenIddictScopeManager scopeManager)
        {
            _permissionDataSeeder = permissionDataSeeder;
            _permissionDefinitionManager = permissionDefinitionManager;
            _configuration = configuration;
            _currentTenant = currentTenant;
            _applicationManager = applicationManager;
            _scopeManager = scopeManager;
        }

        [UnitOfWork]
        public virtual async Task SeedAsync(DataSeedContext context)
        {
            using (_currentTenant.Change(context?.TenantId))
            {
                await CreateScopeAsync();
                await CreateClientsAsync();
            }
        }

        private async Task CreateScopeAsync()
        {
            await CreateScopeAsync(OpenIddictDemoAuthConst.ApplicationScope, new[] { OpenIddictDemoAuthConst.Audience });
        }

        private async Task CreateScopeAsync(string name, IEnumerable<string> resources)
        {
            var scopeObject = await _scopeManager.FindByNameAsync(name);
            if (scopeObject is null)
            {
                var scopeDescriptor = new OpenIddictScopeDescriptor
                {
                    DisplayName = name + " API",
                    DisplayNames = { },
                    Name = name
                };

                scopeObject = await _scopeManager.CreateAsync(scopeDescriptor);
            }
            var scope = scopeObject.As<OpenIddictScope>();

            foreach (var resource in resources)
            {
                if (!scope.Resources.Contains(resource))
                {
                    scope.Resources.Add(resource);
                }
            }

            await _scopeManager.UpdateAsync(scope);
        }

        private async Task CreateClientsAsync()
        {
            var commonPermissions = new[]
            {
                Permissions.Scopes.Email,
                Permissions.Scopes.Profile,
                Permissions.Scopes.Roles,
                Permissions.Scopes.Phone,
                Permissions.Scopes.Address,
                Permissions.Prefixes.Scope + OpenIddictDemoAuthConst.ApplicationScope,
            };

            var configurationSection = _configuration.GetSection("OpenIddictSeed:Applications");

            //Web Client
            var webClientId = configurationSection["OpenIddictDemo_Web:ClientId"];
            if (!webClientId.IsNullOrWhiteSpace())
            {
                var webClientRootUrl = configurationSection["OpenIddictDemo_Web:RootUrl"].EnsureEndsWith('/');

                /* OpenIddictDemo_Web client is only needed if you created a tiered
                 * solution. Otherwise, you can delete this client. */

                await CreateClientAsync(
                    name: webClientId,
                    clientType: ClientTypes.Confidential,//need ClientSecret
                    consentType: ConsentTypes.Explicit,
                    permissions: commonPermissions
                        .Union(new[] {
                            Permissions.ResponseTypes.Code,
                            Permissions.ResponseTypes.CodeIdToken
                            //Permissions.ResponseTypes.CodeIdTokenToken,
                            //Permissions.ResponseTypes.CodeToken,
                            //Permissions.ResponseTypes.IdToken,
                            //Permissions.ResponseTypes.IdTokenToken,
                            //Permissions.ResponseTypes.Token,
                        }),
                    grantTypes: new[] {
                        Permissions.GrantTypes.AuthorizationCode,
                        Permissions.GrantTypes.Implicit
                    },
                    secret: configurationSection["OpenIddictDemo_Web:ClientSecret"] ?? "1q2w3e*",
                    redirectUri: $"{webClientRootUrl}signin-oidc",
                    postLogoutRedirectUri: $"{webClientRootUrl}signout-callback-oidc",
                    requirePkce: true
                );
            }

            //Console Test / Angular Client
            var consoleAndAngularClientId = configurationSection["OpenIddictDemo_App:ClientId"];
            if (!consoleAndAngularClientId.IsNullOrWhiteSpace())
            {
                var webClientRootUrl = configurationSection["OpenIddictDemo_App:RootUrl"]?.TrimEnd('/');

                await CreateClientAsync(
                    name: consoleAndAngularClientId,
                    clientType: ClientTypes.Confidential,//need ClientSecret
                    consentType: ConsentTypes.Implicit,
                    permissions: commonPermissions.Union(new[] {
                            Permissions.ResponseTypes.Code,
                            Permissions.ResponseTypes.CodeIdToken
                        }),
                    grantTypes: new[] {
                        Permissions.GrantTypes.Password,
                        Permissions.GrantTypes.ClientCredentials,
                        Permissions.GrantTypes.AuthorizationCode
                    },
                    secret: configurationSection["OpenIddictDemo_App:ClientSecret"] ?? "1q2w3e*",
                    redirectUri: webClientRootUrl
                );
            }

            // Blazor Client
            var blazorClientId = configurationSection["OpenIddictDemo_Blazor:ClientId"];
            if (!blazorClientId.IsNullOrWhiteSpace())
            {
                var blazorRootUrl = configurationSection["OpenIddictDemo_Blazor:RootUrl"].TrimEnd('/');

                await CreateClientAsync(
                    name: blazorClientId,
                    clientType: ClientTypes.Public,//not require ClientSecret
                    consentType: ConsentTypes.Explicit,
                    permissions: commonPermissions.Union(new[] {
                            Permissions.ResponseTypes.Code,
                            Permissions.ResponseTypes.CodeIdToken,
                        }),
                    grantTypes: new[] {
                        Permissions.GrantTypes.AuthorizationCode
                    },
                    redirectUri: $"{blazorRootUrl}/authentication/login-callback",
                    postLogoutRedirectUri: $"{blazorRootUrl}/authentication/logout-callback"
                );
            }

            // Swagger Client
            var swaggerClientId = configurationSection["OpenIddictDemo_Swagger:ClientId"];
            if (!swaggerClientId.IsNullOrWhiteSpace())
            {
                var swaggerRootUrl = configurationSection["OpenIddictDemo_Swagger:RootUrl"].TrimEnd('/');

                await CreateClientAsync(
                    name: swaggerClientId,
                    clientType: ClientTypes.Confidential,//need ClientSecret
                    consentType: ConsentTypes.Explicit,
                    permissions: commonPermissions.Union(new[] {
                            Permissions.ResponseTypes.Code,
                            Permissions.ResponseTypes.CodeIdToken
                        }),
                    grantTypes: new[] {
                        Permissions.GrantTypes.AuthorizationCode
                    },
                    secret: configurationSection["OpenIddictDemo_Swagger:ClientSecret"],
                    redirectUri: $"{swaggerRootUrl}/swagger/oauth2-redirect.html"
                );
            }

            // Console Test 2
            var clientClientId = configurationSection["OpenIddictDemo_Client:ClientId"];
            if (!swaggerClientId.IsNullOrWhiteSpace())
            {
                await CreateClientAsync(
                    name: clientClientId,
                    clientType: ClientTypes.Confidential,//need ClientSecret
                    consentType: ConsentTypes.Implicit,
                    permissions: commonPermissions,
                    grantTypes: new[] {
                        Permissions.GrantTypes.ClientCredentials
                    },
                    secret: configurationSection["OpenIddictDemo_Client:ClientSecret"],
                    appPermissions: _permissionDefinitionManager.GetPermissions()
                );
            }
        }

        private async Task CreateClientAsync(
            string name,
            string clientType,
            string consentType,
            IEnumerable<string> permissions,
            IEnumerable<string> grantTypes,
            string secret = null,
            string redirectUri = null,
            string postLogoutRedirectUri = null,
            bool requirePkce = false,
            IEnumerable<string> requirements = null,
            IEnumerable<PermissionDefinition> appPermissions = null)
        {
            var clientObject = await _applicationManager.FindByClientIdAsync(name);
            if (clientObject == null)
            {
                var applicationDescriptor = new OpenIddictApplicationDescriptor
                {
                    ClientId = name,
                    ClientSecret = secret,
                    Type = clientType,
                    ConsentType = consentType,
                    DisplayName = name,
                    Permissions =
                    {
                        Permissions.Endpoints.Authorization,
                        Permissions.Endpoints.Logout,
                        Permissions.Endpoints.Token,
                        Permissions.GrantTypes.RefreshToken,
                    }
                };

                clientObject = await _applicationManager.CreateAsync(applicationDescriptor);
            }

            var client = clientObject.As<OpenIddictApplication>();

            client.SetClientType(clientType);
            client.SetConsentType(consentType);
            client.SetDisplayName(name);

            foreach (var permission in permissions)
            {
                if (!client.Permissions.Contains(permission, StringComparer.Ordinal))
                {
                    client.Permissions.Add(permission);
                }
            }

            foreach (var grantType in grantTypes)
            {
                if (!client.Permissions.Contains(grantType, StringComparer.Ordinal))
                {
                    client.Permissions.Add(grantType);
                }
            }

            if (redirectUri != null)
            {
                if (!client.RedirectUris.Contains(redirectUri, StringComparer.Ordinal))
                {
                    client.RedirectUris.Add(redirectUri);
                }
            }

            if (postLogoutRedirectUri != null)
            {
                if (!client.PostLogoutRedirectUris.Contains(postLogoutRedirectUri, StringComparer.Ordinal))
                {
                    client.PostLogoutRedirectUris.Add(postLogoutRedirectUri);
                }
            }

            if (requirePkce)
            {
                client.Requirements.Add(Requirements.Features.ProofKeyForCodeExchange);
            }

            if (requirements != null)
            {
                foreach (var requirement in requirements)
                {
                    if (!client.Requirements.Contains(requirement, StringComparer.Ordinal))
                    {
                        client.Requirements.Add(requirement);
                    }
                }
            }

            await _applicationManager.UpdateAsync(client, secret);

            if (appPermissions != null)
            {
                await _permissionDataSeeder.SeedAsync(
                    ClientPermissionValueProvider.ProviderName,
                    name,
                    appPermissions.Select(x=>x.Name),
                    null
                );
            }
        }
    }
}
