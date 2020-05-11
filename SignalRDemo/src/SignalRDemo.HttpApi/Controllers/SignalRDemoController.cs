using SignalRDemo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace SignalRDemo.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class SignalRDemoController : AbpController
    {
        protected SignalRDemoController()
        {
            LocalizationResource = typeof(SignalRDemoResource);
        }
    }
}