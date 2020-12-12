using DevExpressSample.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace DevExpressSample.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class DevExpressSampleController : AbpController
    {
        protected DevExpressSampleController()
        {
            LocalizationResource = typeof(DevExpressSampleResource);
        }
    }
}