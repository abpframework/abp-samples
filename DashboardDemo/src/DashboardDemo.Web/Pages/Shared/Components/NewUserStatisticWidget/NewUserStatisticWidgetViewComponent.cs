using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.Widgets;

namespace DashboardDemo.Web.Pages.Shared.Components.NewUserStatisticWidget
{
    [Widget(
        ScriptTypes = new[] { typeof(NewUserStatisticWidgetScriptContributor)}
        )]
    public class NewUserStatisticWidgetViewComponent : AbpViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
