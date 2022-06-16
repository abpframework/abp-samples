using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.Widgets;

namespace DashboardDemo.Web.Pages.Shared.Components.LicenseStatisticWidget
{
    [Widget(
        ScriptTypes = new[] { typeof(LicenseStatisticWidgetScriptContributor) }
        )]
    public class LicenseStatisticWidgetViewComponent : AbpViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
