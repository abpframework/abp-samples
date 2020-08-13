using DevExtreme.Sample.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace DevExtreme.Sample.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class SamplePageModel : AbpPageModel
    {
        protected SamplePageModel()
        {
            LocalizationResourceType = typeof(SampleResource);
        }
    }
}