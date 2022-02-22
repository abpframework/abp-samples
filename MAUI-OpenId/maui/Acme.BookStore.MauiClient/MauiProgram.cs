using IdentityModel.Client;
using IdentityModel.OidcClient;

namespace Acme.BookStore.MauiClient;

public static class MauiProgram
{
    public static MauiApp CreateMauiApp()
    {
        var builder = MauiApp.CreateBuilder();
        builder
            .UseMauiApp<App>()
            .ConfigureFonts(fonts =>
            {
                fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
            });

        builder.Services.AddTransient<WebAuthenticatorBrowser>();

        builder.Services.AddTransient<OidcClient>(sp =>
            new OidcClient(new OidcClientOptions
            {
                // Use your own ngrok url:
                Authority = "https://46fd-45-156-29-175.ngrok.io",
                ClientId = "BookStore_Maui",
                RedirectUri = "bookstore://",
                Scope = "openid email profile role BookStore offline_access",
                ClientSecret = "1q2w3E*",
                Browser = sp.GetRequiredService<WebAuthenticatorBrowser>(),
            })
        );

        builder.Services.AddSingleton<AccessTokenHttpMessageHandler>();
        builder.Services.AddTransient<HttpClient>(sp =>
            new HttpClient(sp.GetRequiredService<AccessTokenHttpMessageHandler>())
            {
                BaseAddress = new Uri("https://46fd-45-156-29-175.ngrok.io")
            });

        builder.Services.AddTransient<MainPage>();

        return builder.Build();
    }
}
