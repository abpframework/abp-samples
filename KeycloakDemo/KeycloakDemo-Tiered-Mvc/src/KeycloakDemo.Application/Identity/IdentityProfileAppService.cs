using System;
using System.Diagnostics;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Identity;
using Microsoft.AspNetCore.Authorization;

namespace KeycloakDemo.Identity;

[Authorize]
public class IdentityProfileAppService : KeycloakDemoAppService, IIdentityProfileAppService
{
    protected IdentityUserManager UserManager { get; }

    public IdentityProfileAppService(IdentityUserManager userManager)
    {
        UserManager = userManager;
    }

    public async Task CreateOrUpdateAsync()
    {
        var user = await UserManager.FindByIdAsync(CurrentUser.Id.ToString());

        if (user == null)
        {
            await CreateCurrentUserAsync();
        }
        else
        {
            await UpdateCurrentUserAsync(user);
        }
    }

    protected virtual async Task CreateCurrentUserAsync()
    {
        var claims = CurrentUser.GetAllClaims();

        var userNameClaim = claims.FirstOrDefault(x => x.Type == "preferred_username");

        var user = new IdentityUser(
                CurrentUser.Id.GetValueOrDefault(),
                userNameClaim.Value, //CurrentUser.UserName provides FullName instead of UserName
                CurrentUser.Email,
                CurrentTenant.Id);

        var isEmailVerified = claims.FirstOrDefault(x => x.Type == "email_verified")?.Value == "true";
        user.SetEmailConfirmed(isEmailVerified);

        if (!CurrentUser.PhoneNumber.IsNullOrEmpty())
        {
            user.SetPhoneNumber(CurrentUser.PhoneNumber, false);
        }

        var result = await UserManager.CreateAsync(user);

        if (!result.Succeeded)
        {
            throw new AbpException(string.Join('\n', result.Errors));
        }
    }

    protected virtual async Task UpdateCurrentUserAsync(IdentityUser user)
    {
        if (user.Email != CurrentUser.Email)
        {
            await UserManager.SetEmailAsync(user, CurrentUser.Email);
        }

        if (user.PhoneNumber != CurrentUser.PhoneNumber)
        {
            await UserManager.SetPhoneNumberAsync(user, CurrentUser.PhoneNumber);
        }

        if (user.UserName != CurrentUser.UserName)
        {
            await UserManager.SetUserNameAsync(user, CurrentUser.UserName);
        }
    }
}
