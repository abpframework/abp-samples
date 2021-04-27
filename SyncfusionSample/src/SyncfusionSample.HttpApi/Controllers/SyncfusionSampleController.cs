using SyncfusionSample.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace SyncfusionSample.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class SyncfusionSampleController : AbpController
    {
        protected SyncfusionSampleController()
        {
            LocalizationResource = typeof(SyncfusionSampleResource);
        }
    }
}