using System;
using System.Threading.Tasks;
using IdentityServer4.AspNetIdentity;
using IdentityServer4.Validation;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;
using Volo.Abp.IdentityServer.AspNetIdentity;
using Volo.Abp.IdentityServer.Localization;
using IdentityUser = Volo.Abp.Identity.IdentityUser;

namespace ConcurrentLogin.AspNetIdentity;

public class ConcurrentLoginResourceOwnerPasswordValidator : AbpResourceOwnerPasswordValidator
{
    public ConcurrentLoginResourceOwnerPasswordValidator(
        Microsoft.AspNetCore.Identity.UserManager<IdentityUser> userManager,
        Microsoft.AspNetCore.Identity.SignInManager<IdentityUser> signInManager,
        IdentitySecurityLogManager identitySecurityLogManager,
        ILogger<ResourceOwnerPasswordValidator<IdentityUser>> logger,
        IStringLocalizer<AbpIdentityServerResource> localizer, IOptions<AbpIdentityOptions> abpIdentityOptions,
        IHybridServiceScopeFactory serviceScopeFactory, IOptions<IdentityOptions> identityOptions) : base(userManager,
        signInManager, identitySecurityLogManager, logger, localizer, abpIdentityOptions, serviceScopeFactory,
        identityOptions)
    {
    }

    protected override async Task SetSuccessResultAsync(ResourceOwnerPasswordValidationContext context, IdentityUser user)
    {
        user.SetProperty(ConcurrentLoginConsts.ConcurrentLoginToken, Guid.NewGuid().ToString("N"));
        await UserManager.UpdateAsync(user);
         await base.SetSuccessResultAsync(context, user);
    }
}
