using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Volo.Abp.Data;
using Volo.Abp.Identity;
using Volo.Abp.Identity.AspNetCore;
using IdentityUser = Volo.Abp.Identity.IdentityUser;

namespace ConcurrentLogin.AspNetIdentity;

public class ConcurrentLoginSignInManager : AbpSignInManager
{
    public ConcurrentLoginSignInManager(IdentityUserManager userManager, IHttpContextAccessor contextAccessor,
        Microsoft.AspNetCore.Identity.IUserClaimsPrincipalFactory<IdentityUser> claimsFactory,
        IOptions<IdentityOptions> optionsAccessor, ILogger<SignInManager<IdentityUser>> logger,
        IAuthenticationSchemeProvider schemes, IUserConfirmation<IdentityUser> confirmation,
        IOptions<AbpIdentityOptions> options) : base(userManager, contextAccessor, claimsFactory, optionsAccessor,
        logger, schemes, confirmation, options)
    {
    }
    public override async Task<SignInResult> PasswordSignInAsync(IdentityUser user, string password, bool isPersistent, bool lockoutOnFailure)
    {
        user.SetProperty(ConcurrentLoginConsts.ConcurrentLoginToken, Guid.NewGuid().ToString("N"));
        await UserManager.UpdateAsync(user);
        return await base.PasswordSignInAsync(user, password, isPersistent, lockoutOnFailure);
    }
}
