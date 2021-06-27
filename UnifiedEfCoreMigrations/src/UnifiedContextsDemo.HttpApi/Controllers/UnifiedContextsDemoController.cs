using UnifiedContextsDemo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace UnifiedContextsDemo.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class UnifiedContextsDemoController : AbpController
    {
        protected UnifiedContextsDemoController()
        {
            LocalizationResource = typeof(UnifiedContextsDemoResource);
        }
    }
}