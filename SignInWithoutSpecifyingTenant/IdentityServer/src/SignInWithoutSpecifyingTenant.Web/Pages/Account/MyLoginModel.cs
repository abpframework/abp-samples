using IdentityServer4.Services;
using IdentityServer4.Stores;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Volo.Abp.Account.Web;
using Volo.Abp.Account.Web.Pages.Account;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;
using Volo.Abp.TenantManagement;
using IdentityUser = Volo.Abp.Identity.IdentityUser;

namespace SignInWithoutSpecifyingTenant.Web.Pages.Account
{
    [ExposeServices(typeof(LoginModel))]
    public class MyLoginModel : IdentityServerSupportedLoginModel
    {
        private readonly ITenantRepository _tenantRepository;


        public MyLoginModel(
            IAuthenticationSchemeProvider schemeProvider,
            IOptions<AbpAccountOptions> accountOptions,
            IOptions<IdentityOptions> identityOptions,
            IdentityDynamicClaimsPrincipalContributorCache identityDynamicClaimsPrincipalContributorCache,
            IIdentityServerInteractionService interaction,
            IClientStore clientStore,
            IEventService identityServerEvents,
            ITenantRepository tenantRepository) : base(schemeProvider, accountOptions, identityOptions, identityDynamicClaimsPrincipalContributorCache, interaction, clientStore, identityServerEvents)
        {
            _tenantRepository = tenantRepository;
        }

        public override async Task<IActionResult> OnPostAsync(string action)
        {
            var user = await FindUserAsync(LoginInput.UserNameOrEmailAddress);
            using (CurrentTenant.Change(user?.TenantId))
            {
                return await base.OnPostAsync(action);
            }
        }

        public override async Task<IActionResult> OnGetExternalLoginCallbackAsync(string returnUrl = "", string returnUrlHash = "", string remoteError = null)
        {
            var user = await FindUserAsync(LoginInput.UserNameOrEmailAddress);
            using (CurrentTenant.Change(user?.TenantId))
            {
                return await base.OnGetExternalLoginCallbackAsync(returnUrl, returnUrlHash, remoteError);
            }
        }

        protected virtual async Task<IdentityUser> FindUserAsync(string uniqueUserNameOrEmailAddress)
        {
            IdentityUser user = null;
            using (CurrentTenant.Change(null))
            {
                user = await UserManager.FindByNameAsync(LoginInput.UserNameOrEmailAddress) ??
                       await UserManager.FindByEmailAsync(LoginInput.UserNameOrEmailAddress);

                if (user != null)
                {
                    return user;
                }
            }

            foreach (var tenant in await _tenantRepository.GetListAsync())
            {
                using (CurrentTenant.Change(tenant.Id))
                {
                    user = await UserManager.FindByNameAsync(LoginInput.UserNameOrEmailAddress) ??
                           await UserManager.FindByEmailAsync(LoginInput.UserNameOrEmailAddress);

                    if (user != null)
                    {
                        return user;
                    }
                }
            }

            return null;
        }
    }
}
