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
        if (App.Current.Properties.TryGetValue(OidcConsts.AccessTokenKeyName, out object currentTokenValue) && currentTokenValue != null)
        {
            var currentAccessToken = currentTokenValue?.ToString();

            // TODO: Find better way to find if token is expired instead of parsing it.
            var jwtToken = new JwtSecurityTokenHandler().ReadJwtToken(currentAccessToken) as JwtSecurityToken;
            if(jwtToken.ValidTo <= DateTime.UtcNow)
            {
                if (App.Current.Properties.TryGetValue(OidcConsts.RefreshTokenKeyName, out object refreshTokenValue) && refreshTokenValue != null)
                {
                    var refreshResult = await OidcClient.RefreshTokenAsync(refreshTokenValue?.ToString());

                    App.Current.Properties[OidcConsts.AccessTokenKeyName] = refreshResult.AccessToken;
                    App.Current.Properties[OidcConsts.RefreshTokenKeyName] = refreshResult.RefreshToken;
                    await App.Current.SavePropertiesAsync();

                    context.Request.SetBearerToken(refreshResult.AccessToken);
                }
                else
                {
                    var result = await OidcClient.LoginAsync(new LoginRequest());

                    App.Current.Properties[OidcConsts.AccessTokenKeyName] = result.AccessToken;
                    App.Current.Properties[OidcConsts.RefreshTokenKeyName] = result.RefreshToken;
                    await App.Current.SavePropertiesAsync();
                    context.Request.SetBearerToken(result.AccessToken);
                }
            }

            context.Request.SetBearerToken(currentAccessToken);
        }
    }
}
