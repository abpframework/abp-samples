using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace DevExtreme.Sample.Web.Components.DevExtremeHead
{
    public class DevExtremeHeadViewComponent : AbpViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View("/Components/DevExtremeHead/Default.cshtml");
        }
    }
}