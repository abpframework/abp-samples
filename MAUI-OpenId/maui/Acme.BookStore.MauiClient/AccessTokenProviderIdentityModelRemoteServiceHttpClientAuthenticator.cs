using IdentityModel.Client;
using IdentityModel.OidcClient;
using System.IdentityModel.Tokens.Jwt;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Http.Client.Authentication;
using DependencyAttribute = Volo.Abp.DependencyInjection.DependencyAttribute;

namespace Acme.BookStore.MauiClient;

[Dependency(ReplaceServices = true)]
[ExposeServices(typeof(IRemoteServiceHttpClientAuthenticator))]
public class AccessTokenRemoteServiceHttpClientAuthenticator : IRemoteServiceHttpClientAuthenticator, ITransientDependency
{
    protected OidcClient OidcClient { get; }

    public AccessTokenRemoteServiceHttpClientAuthenticator(OidcClient oidcClient)
    {
        OidcClient = oidcClient;
    }

    public async Task Authenticate(RemoteServiceHttpClientAuthenticateContext context)
    {
        var currentAccessToken = await SecureStorage.GetAsync(OidcConsts.AccessTokenKeyName);

        if (!currentAccessToken.IsNullOrEmpty())
        {
            // TODO: Find better way to find if token is expired instead of parsing it.
            var jwtToken = new JwtSecurityTokenHandler().ReadJwtToken(currentAccessToken) as JwtSecurityToken;
            if (jwtToken.ValidTo <= DateTime.UtcNow)
            {
                var refreshToken = await SecureStorage.GetAsync(OidcConsts.RefreshTokenKeyName);
                if (!refreshToken.IsNullOrEmpty())
                {
                    var refreshResult = await OidcClient.RefreshTokenAsync(refreshToken);

                    await SecureStorage.SetAsync(OidcConsts.AccessTokenKeyName, refreshResult.AccessToken);
                    await SecureStorage.SetAsync(OidcConsts.RefreshTokenKeyName, refreshResult.RefreshToken);

                    context.Request.SetBearerToken(refreshResult.AccessToken);
                }
                else
                {
                    var loginResult = await OidcClient.LoginAsync(new LoginRequest());

                    await SecureStorage.SetAsync(OidcConsts.AccessTokenKeyName, loginResult.AccessToken);
                    await SecureStorage.SetAsync(OidcConsts.RefreshTokenKeyName, loginResult.RefreshToken);

                    context.Request.SetBearerToken(loginResult.AccessToken);
                }
            }

            context.Request.SetBearerToken(currentAccessToken);
        }
    }
}
