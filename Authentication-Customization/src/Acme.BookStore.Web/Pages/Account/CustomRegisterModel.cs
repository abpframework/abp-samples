using Volo.Abp.Account.Web.Pages.Account;
using Volo.Abp.DependencyInjection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using Volo.Abp.Security.Claims;
using IdentityUser = Volo.Abp.Identity.IdentityUser;
using Microsoft.AspNetCore.Mvc;
using IdentityModel;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Options;
using Volo.Abp.Account;
using Volo.Abp.Account.Web;
using Volo.Abp.Identity;

namespace Acme.BookStore.Web.Pages.Account
{
    [Dependency(ReplaceServices = true)]
    [ExposeServices(typeof(RegisterModel))]
    public class CustomRegisterModel : RegisterModel
    {


        public CustomRegisterModel(IAccountAppService accountAppService, IAuthenticationSchemeProvider schemeProvider, IOptions<AbpAccountOptions> accountOptions, IdentityDynamicClaimsPrincipalContributorCache identityDynamicClaimsPrincipalContributorCache) : base(accountAppService, schemeProvider, accountOptions, identityDynamicClaimsPrincipalContributorCache)
        {
        }

        protected async override Task RegisterExternalUserAsync(ExternalLoginInfo externalLoginInfo, string userName, string emailAddress)
        {
            emailAddress = externalLoginInfo.Principal.FindFirstValue(AbpClaimTypes.Email);
            var userId = GuidGenerator.Create();
            var user = new IdentityUser(userId, emailAddress, emailAddress, CurrentTenant.Id)
            {
                // This claim will be null if using AzureAD v2.0 endpoint
                Name = externalLoginInfo.Principal.FindFirstValue(JwtClaimTypes.GivenName),
                // This claim will be null if using AzureAD v2.0 endpoint
                Surname = externalLoginInfo.Principal.FindFirstValue(JwtClaimTypes.FamilyName),
                IsExternal = true
            };

            //Optional: Add claims to user claims
            if (!string.IsNullOrEmpty(externalLoginInfo.Principal.FindFirstValue(JwtClaimTypes.GivenName)))
            {
                user.Claims.Add(new Volo.Abp.Identity.IdentityUserClaim(GuidGenerator.Create(), userId,
                    JwtClaimTypes.GivenName, externalLoginInfo.Principal.FindFirstValue(JwtClaimTypes.GivenName), CurrentTenant.Id));
            }

            if (!string.IsNullOrEmpty(externalLoginInfo.Principal.FindFirstValue(JwtClaimTypes.FamilyName)))
            {
                user.Claims.Add(new Volo.Abp.Identity.IdentityUserClaim(GuidGenerator.Create(), userId,
                    JwtClaimTypes.FamilyName, externalLoginInfo.Principal.FindFirstValue(JwtClaimTypes.FamilyName),
                    CurrentTenant.Id));
            }

            CheckIdentityErrors(await UserManager.CreateAsync(user));
            CheckIdentityErrors(await UserManager.SetEmailAsync(user, emailAddress));
            CheckIdentityErrors(await UserManager.AddLoginAsync(user, externalLoginInfo));

            await SignInManager.SignInAsync(user, isPersistent: true, ExternalLoginAuthSchema);

            // Clear the dynamic claims cache.
            await IdentityDynamicClaimsPrincipalContributorCache.ClearAsync(user.Id, user.TenantId);
        }

    }
}
