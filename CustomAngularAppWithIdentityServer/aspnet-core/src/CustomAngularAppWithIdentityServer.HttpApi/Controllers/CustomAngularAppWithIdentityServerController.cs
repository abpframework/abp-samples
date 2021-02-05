using CustomAngularAppWithIdentityServer.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace CustomAngularAppWithIdentityServer.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class CustomAngularAppWithIdentityServerController : AbpController
    {
        protected CustomAngularAppWithIdentityServerController()
        {
            LocalizationResource = typeof(CustomAngularAppWithIdentityServerResource);
        }
    }
}