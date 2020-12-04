using Volo.Abp.Account.Web.Pages.Account;
using Volo.Abp.DependencyInjection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using Volo.Abp.Security.Claims;
using IdentityUser = Volo.Abp.Identity.IdentityUser;
using Microsoft.AspNetCore.Mvc;
using IdentityModel;
using Microsoft.Extensions.Options;

namespace Acme.BookStore.Web.Pages.Account
{
    public class CustomLoginModel : LoginModel
    {
        public CustomLoginModel(
            Microsoft.AspNetCore.Authentication.IAuthenticationSchemeProvider schemeProvider,
            IOptions<Volo.Abp.Account.Web.AbpAccountOptions> accountOptions,
            IOptions<IdentityOptions> identityOptions)
            : base(schemeProvider: schemeProvider, accountOptions: accountOptions, identityOptions: identityOptions)
        {
        }

        protected override async Task<IdentityUser> CreateExternalUserAsync(ExternalLoginInfo info)
        {
            var emailAddress = info.Principal.FindFirstValue(AbpClaimTypes.Email);
            var userId = GuidGenerator.Create();
            var user = new IdentityUser(userId, emailAddress, emailAddress, CurrentTenant.Id)
            {
                // This claim will be null if using AzureAD v2.0 endpoint
                Name = info.Principal.FindFirstValue(JwtClaimTypes.GivenName),
                // This claim will be null if using AzureAD v2.0 endpoint
                Surname = info.Principal.FindFirstValue(JwtClaimTypes.FamilyName),
                IsExternal = true
            };

            //Optional: Add claims to user claims
            if (!string.IsNullOrEmpty(info.Principal.FindFirstValue(JwtClaimTypes.GivenName)))
            {
                user.Claims.Add(new Volo.Abp.Identity.IdentityUserClaim(GuidGenerator.Create(), userId,
                    JwtClaimTypes.GivenName, info.Principal.FindFirstValue(JwtClaimTypes.GivenName), CurrentTenant.Id));
            }

            if (!string.IsNullOrEmpty(info.Principal.FindFirstValue(JwtClaimTypes.FamilyName)))
            {
                user.Claims.Add(new Volo.Abp.Identity.IdentityUserClaim(GuidGenerator.Create(), userId,
                    JwtClaimTypes.FamilyName, info.Principal.FindFirstValue(JwtClaimTypes.FamilyName),
                    CurrentTenant.Id));
            }

            CheckIdentityErrors(await UserManager.CreateAsync(user));
            CheckIdentityErrors(await UserManager.SetEmailAsync(user, emailAddress));
            CheckIdentityErrors(await UserManager.AddLoginAsync(user, info));

            return user;
        }
    }
}