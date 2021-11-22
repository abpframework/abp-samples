using Profiler.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Profiler.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class ProfilerController : AbpController
    {
        protected ProfilerController()
        {
            LocalizationResource = typeof(ProfilerResource);
        }
    }
}