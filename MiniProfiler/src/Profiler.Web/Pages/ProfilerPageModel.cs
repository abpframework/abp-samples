using Profiler.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Profiler.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class ProfilerPageModel : AbpPageModel
    {
        protected ProfilerPageModel()
        {
            LocalizationResourceType = typeof(ProfilerResource);
        }
    }
}