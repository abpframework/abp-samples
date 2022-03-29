using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Volo.Abp.Account.Settings;
using Volo.Abp.Account.Web;
using Volo.Abp.Account.Web.Pages.Account;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Security.Claims;
using Volo.Abp.Settings;
using IdentityUser = Volo.Abp.Identity.IdentityUser;

namespace KeycloakDemo;

[ExposeServices(typeof(LoginModel))]
public class MyLoginModel : LoginModel
{
    public MyLoginModel(
        IAuthenticationSchemeProvider schemeProvider,
        IOptions<AbpAccountOptions> accountOptions,
        IOptions<IdentityOptions> identityOptions
        ) : base(schemeProvider, accountOptions, identityOptions)
    {
    }

    public override async Task<IActionResult> OnGetAsync()
    {
        ExternalProviders = await GetExternalProviders();
        return await base.OnPostExternalLogin(ExternalProviders.First().AuthenticationScheme);
    }

    
    /*
    * What I've done with this class will be built-in with ABP v5.3.0 (then we can delete this class completely)
    * https://github.com/abpframework/abp/pull/12085
    */

    protected override async Task<IdentityUser> CreateExternalUserAsync(ExternalLoginInfo info)
    {
        var user = await base.CreateExternalUserAsync(info);

        user.Name = info.Principal.FindFirstValue(AbpClaimTypes.Name);
        user.Surname = info.Principal.FindFirstValue(AbpClaimTypes.SurName);
        var phoneNumber = info.Principal.FindFirstValue(AbpClaimTypes.PhoneNumber);
        var phoneNumberConfirmed = string.Equals(info.Principal.FindFirstValue(AbpClaimTypes.PhoneNumberVerified), "true", StringComparison.InvariantCultureIgnoreCase);
        if (!phoneNumber.IsNullOrWhiteSpace())
        {
            user.SetPhoneNumber(phoneNumber, phoneNumberConfirmed);
        }

        await UserManager.UpdateAsync(user);

        return user;
    }
}