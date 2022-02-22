using IdentityModel.OidcClient;

namespace Acme.BookStore.MauiClient;

public partial class MainPage : ContentPage
{
    private readonly HttpClient httpClient;

    protected OidcClient OidcClient { get; }

    public MainPage(OidcClient oidcClient, HttpClient httpClient)
    {
        InitializeComponent();
        OidcClient = oidcClient;
        this.httpClient = httpClient;
    }

    private async void OnLoginClicked(object sender, EventArgs e)
    {
        try
        {
            var loginResult = await OidcClient.LoginAsync(new LoginRequest());

            App.Current.Properties[OidcConsts.AccessTokenKeyName] = loginResult.AccessToken;
            App.Current.Properties[OidcConsts.RefreshTokenKeyName] = loginResult.RefreshToken;

            await App.Current.SavePropertiesAsync();

            var json = await httpClient.GetStringAsync("/api/identity/users");

            await DisplayAlert("/api/identity/users", json, "close");
        }
        catch (Exception ex)
        {
            await DisplayAlert("Error", ex.ToString(), "ok");
        }
    }
}