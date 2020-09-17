using ExtendLocalizationResource.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace ExtendLocalizationResource.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class ExtendLocalizationResourceController : AbpController
    {
        protected ExtendLocalizationResourceController()
        {
            LocalizationResource = typeof(ExtendLocalizationResourceResource);
        }
    }
}