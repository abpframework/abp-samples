using DevExtremeSample.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace DevExtremeSample.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class DevExtremeSamplePageModel : AbpPageModel
    {
        protected DevExtremeSamplePageModel()
        {
            LocalizationResourceType = typeof(DevExtremeSampleResource);
        }
    }
}