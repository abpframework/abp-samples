using SignalRDemo.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace SignalRDemo.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class SignalRDemoPageModel : AbpPageModel
    {
        protected SignalRDemoPageModel()
        {
            LocalizationResourceType = typeof(SignalRDemoResource);
        }
    }
}