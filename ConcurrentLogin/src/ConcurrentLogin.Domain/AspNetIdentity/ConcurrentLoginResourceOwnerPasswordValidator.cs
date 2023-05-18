using System;
using System.Threading.Tasks;
using IdentityServer4.AspNetIdentity;
using IdentityServer4.Validation;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;
using Volo.Abp.IdentityServer.AspNetIdentity;
using Volo.Abp.IdentityServer.Localization;
using Volo.Abp.Settings;
using IdentityUser = Volo.Abp.Identity.IdentityUser;

namespace ConcurrentLogin.AspNetIdentity;

public class ConcurrentLoginResourceOwnerPasswordValidator : AbpResourceOwnerPasswordValidator
{

    public ConcurrentLoginResourceOwnerPasswordValidator(IdentityUserManager userManager, SignInManager<IdentityUser> signInManager, IdentitySecurityLogManager identitySecurityLogManager, ILogger<ResourceOwnerPasswordValidator<IdentityUser>> logger, IStringLocalizer<AbpIdentityServerResource> localizer, IOptions<AbpIdentityOptions> abpIdentityOptions, IServiceScopeFactory serviceScopeFactory, IOptions<IdentityOptions> identityOptions, ISettingProvider settingProvider) : base(userManager, signInManager, identitySecurityLogManager, logger, localizer, abpIdentityOptions, serviceScopeFactory, identityOptions, settingProvider)
    {
    }

    protected override async Task SetSuccessResultAsync(ResourceOwnerPasswordValidationContext context, IdentityUser user)
    {
        user.SetProperty(ConcurrentLoginConsts.ConcurrentLoginToken, Guid.NewGuid().ToString("N"));
        await UserManager.UpdateAsync(user);
         await base.SetSuccessResultAsync(context, user);
    }


}
