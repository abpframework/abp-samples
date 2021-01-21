using AbpPrimengSample.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace AbpPrimengSample.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class AbpPrimengSampleController : AbpController
    {
        protected AbpPrimengSampleController()
        {
            LocalizationResource = typeof(AbpPrimengSampleResource);
        }
    }
}