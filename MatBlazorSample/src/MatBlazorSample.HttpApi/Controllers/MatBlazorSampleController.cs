using MatBlazorSample.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace MatBlazorSample.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class MatBlazorSampleController : AbpController
    {
        protected MatBlazorSampleController()
        {
            LocalizationResource = typeof(MatBlazorSampleResource);
        }
    }
}