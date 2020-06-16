using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace CustomApplicationModules.Web.Pages.Shared.Components.GoogleAnalytics
{
    public class GoogleAnalyticsViewComponent : AbpViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View("/Pages/Shared/Components/GoogleAnalytics/Default.cshtml");
        }
    }
}
