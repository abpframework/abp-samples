using ConcurrencyDemo.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace ConcurrencyDemo.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class ConcurrencyDemoPageModel : AbpPageModel
    {
        protected ConcurrencyDemoPageModel()
        {
            LocalizationResourceType = typeof(ConcurrencyDemoResource);
        }
    }
}