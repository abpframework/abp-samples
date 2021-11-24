using ProfilerTiered.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace ProfilerTiered.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class ProfilerTieredController : AbpController
    {
        protected ProfilerTieredController()
        {
            LocalizationResource = typeof(ProfilerTieredResource);
        }
    }
}