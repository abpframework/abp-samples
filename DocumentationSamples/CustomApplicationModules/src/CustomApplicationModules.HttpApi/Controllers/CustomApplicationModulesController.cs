using CustomApplicationModules.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace CustomApplicationModules.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class CustomApplicationModulesController : AbpController
    {
        protected CustomApplicationModulesController()
        {
            LocalizationResource = typeof(CustomApplicationModulesResource);
        }
    }
}