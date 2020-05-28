using SignalRTieredDemo.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace SignalRTieredDemo.Web.Pages
{
    public abstract class SignalRTieredDemoPageModel : AbpPageModel
    {
        protected SignalRTieredDemoPageModel()
        {
            LocalizationResourceType = typeof(SignalRTieredDemoResource);
        }
    }
}