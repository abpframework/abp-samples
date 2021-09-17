using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Identity;
using Volo.Abp.Identity.AspNetCore;

namespace PasswordlessAuthentication.Web.Controllers
{
    public class PasswordlessController : AbpController
    {
        protected IdentityUserManager UserManager { get; }

        protected AbpSignInManager SignInManager { get; }

        public PasswordlessController(IdentityUserManager userManager, AbpSignInManager signInManager)
        {
            UserManager = userManager;
            SignInManager = signInManager;
        }

        public virtual async Task<IActionResult> Login(string token, string userId)
        {
            var user = await UserManager.FindByIdAsync(userId);

            var isValid = await UserManager.VerifyUserTokenAsync(user, "PasswordlessLoginProvider", "passwordless-auth", token);
            if (!isValid)
            {
                throw new UnauthorizedAccessException("The token " + token + " is not valid for the user " + userId);
            }

            await UserManager.UpdateSecurityStampAsync(user);

            await SignInManager.SignInAsync(user, isPersistent: false);

            return Redirect("/");
        }
    }
}
