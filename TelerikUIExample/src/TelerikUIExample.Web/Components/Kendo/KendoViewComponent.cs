using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace TelerikUIExample.Web.Components.Kendo
{
    public class KendoViewComponent : AbpViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View("/Components/Kendo/Default.cshtml");
        }
    }
}
