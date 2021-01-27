using CustomNgAppWithIdentityServer.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace CustomNgAppWithIdentityServer.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class CustomNgAppWithIdentityServerController : AbpController
    {
        protected CustomNgAppWithIdentityServerController()
        {
            LocalizationResource = typeof(CustomNgAppWithIdentityServerResource);
        }
    }
}