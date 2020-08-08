using PasswordlessAuthentication.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace PasswordlessAuthentication.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class PasswordlessAuthenticationController : AbpController
    {
        protected PasswordlessAuthenticationController()
        {
            LocalizationResource = typeof(PasswordlessAuthenticationResource);
        }
    }
}