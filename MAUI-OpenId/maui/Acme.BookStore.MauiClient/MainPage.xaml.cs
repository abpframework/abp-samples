using IdentityModel.OidcClient;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;

namespace Acme.BookStore.MauiClient;

public partial class MainPage : ContentPage, ITransientDependency
{
    private readonly HttpClient httpClient;

    protected OidcClient OidcClient { get; }

    public IIdentityUserAppService IdentityUserAppService { get; }

    public MainPage(
        OidcClient oidcClient,
        HttpClient httpClient,
        IIdentityUserAppService identityUserAppService)
    {
        InitializeComponent();
        OidcClient = oidcClient;
        this.httpClient = httpClient;
        IdentityUserAppService = identityUserAppService;
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

    private async void OnGetUsersClicked(object sender, EventArgs e)
    {
        var result = await IdentityUserAppService.GetListAsync(new GetIdentityUsersInput());
    }
}