using IdentityModel.OidcClient;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Volo.Abp.Autofac;
using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace Acme.BookStore.MauiClient;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(AbpHttpClientIdentityModelModule),
    typeof(BookStoreHttpApiClientModule)
    )]
public class BookStoreMauiClientModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        var configuration = context.Services.GetConfiguration();

        Configure<OidcClientOptions>(configuration.GetSection("Oidc:Options"));

        context.Services.AddTransient<OidcClient>(sp =>
        {
            var options = sp.GetRequiredService<IOptions<OidcClientOptions>>().Value;
            options.Browser = sp.GetRequiredService<WebAuthenticatorBrowser>();
            return new OidcClient(options);
        });

        context.Services.AddTransient<HttpClient>(sp =>
            new HttpClient(sp.GetRequiredService<AccessTokenHttpMessageHandler>())
            {
                // Temporarily. We'll use ABP's Proxy for sendind requests.
                BaseAddress = new Uri(configuration.GetValue<string>("RemoteServices:Default:BaseUrl"))
            });
    }
}
