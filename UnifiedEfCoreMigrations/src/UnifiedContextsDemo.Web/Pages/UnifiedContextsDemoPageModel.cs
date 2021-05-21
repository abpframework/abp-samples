using UnifiedContextsDemo.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace UnifiedContextsDemo.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class UnifiedContextsDemoPageModel : AbpPageModel
    {
        protected UnifiedContextsDemoPageModel()
        {
            LocalizationResourceType = typeof(UnifiedContextsDemoResource);
        }
    }
}