using Microsoft.AspNetCore.Mvc;
using Volo.Abp.Account.Web.Pages.Account;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;

namespace KeycloakDemo;

[ExposeServices(typeof(LogoutModel))]
public class MyLogoutModel : LogoutModel
{
    protected IConfiguration Configuration { get; }

    public MyLogoutModel(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public override async Task<IActionResult> OnGetAsync()
    {
        await IdentitySecurityLogManager.SaveAsync(new IdentitySecurityLogContext()
        {
            Identity = IdentitySecurityLogIdentityConsts.Identity,
            Action = IdentitySecurityLogActionConsts.Logout
        });

        await SignInManager.SignOutAsync();

        ReturnUrl ??= "/";

        if (ReturnUrl != null)
        {
            return await RedirectSafelyAsync(ReturnUrl, ReturnUrlHash);
        }

        ReturnUrl = Configuration.GetValue<string>("App:SelfUrl") + ReturnUrl;

        return Redirect(Configuration.GetValue<string>("AuthServer:Authority").EnsureEndsWith('/') + "protocol/openid-connect/logout?redirect_uri=" + ReturnUrl);
    }
}
