using ProfilerTiered.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace ProfilerTiered.Web.Pages
{
    public abstract class ProfilerTieredPageModel : AbpPageModel
    {
        protected ProfilerTieredPageModel()
        {
            LocalizationResourceType = typeof(ProfilerTieredResource);
        }
    }
}