using DevExtremeSample.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace DevExtremeSample.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class DevExtremeSampleController : AbpController
    {
        protected DevExtremeSampleController()
        {
            LocalizationResource = typeof(DevExtremeSampleResource);
        }
    }
}