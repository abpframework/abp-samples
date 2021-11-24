using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace ProfilerTiered.Web.Components.MiniProfiler;

public class MiniProfilerViewComponent : AbpViewComponent
{
    public virtual IViewComponentResult Invoke()
    {
        return View("~/Components/MiniProfiler/Default.cshtml");
    }
}