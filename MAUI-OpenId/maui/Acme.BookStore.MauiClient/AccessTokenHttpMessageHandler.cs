using IdentityModel.Client;
using IdentityModel.OidcClient;
using Volo.Abp.DependencyInjection;

namespace Acme.BookStore.MauiClient;

public class AccessTokenHttpMessageHandler : DelegatingHandler, ISingletonDependency
{
    protected OidcClient OidcClient { get; }

    public AccessTokenHttpMessageHandler(OidcClient oidcClient) : base(new HttpClientHandler())
    {
        OidcClient = oidcClient;
    }

    protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
    {
        if (App.Current.Properties.TryGetValue(OidcConsts.AccessTokenKeyName, out object currentTokenValue) && currentTokenValue != null)
        {
            request.SetBearerToken(currentTokenValue?.ToString());
            request.Headers.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
        }

        var response = await base.SendAsync(request, cancellationToken);

        if (response.StatusCode == System.Net.HttpStatusCode.Unauthorized)
        {
            if (App.Current.Properties.TryGetValue(OidcConsts.RefreshTokenKeyName, out object refreshTokenValue) && refreshTokenValue != null)
            {
                var refreshResult = await OidcClient.RefreshTokenAsync(refreshTokenValue?.ToString());

                App.Current.Properties[OidcConsts.AccessTokenKeyName] = refreshResult.AccessToken;
                App.Current.Properties[OidcConsts.RefreshTokenKeyName] = refreshResult.RefreshToken;
                await App.Current.SavePropertiesAsync();

                request.SetBearerToken(refreshResult.AccessToken);

                return await base.SendAsync(request, cancellationToken);
            }
            else
            {
                var result = await OidcClient.LoginAsync(new LoginRequest());
                request.SetBearerToken(result.AccessToken);

                App.Current.Properties[OidcConsts.AccessTokenKeyName] = result.AccessToken;
                App.Current.Properties[OidcConsts.RefreshTokenKeyName] = result.RefreshToken;
                await App.Current.SavePropertiesAsync();
                request.SetBearerToken(result.AccessToken);

                return await base.SendAsync(request, cancellationToken);
            }
        }

        return response;
    }
}
