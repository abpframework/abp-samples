using ConcurrencyDemo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace ConcurrencyDemo.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class ConcurrencyDemoController : AbpController
    {
        protected ConcurrencyDemoController()
        {
            LocalizationResource = typeof(ConcurrencyDemoResource);
        }
    }
}