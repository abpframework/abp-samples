using SignalRTieredDemo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace SignalRTieredDemo.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class SignalRTieredDemoController : AbpController
    {
        protected SignalRTieredDemoController()
        {
            LocalizationResource = typeof(SignalRTieredDemoResource);
        }
    }
}