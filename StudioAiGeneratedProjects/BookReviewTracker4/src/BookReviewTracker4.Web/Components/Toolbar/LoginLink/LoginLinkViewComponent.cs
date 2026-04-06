using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace BookReviewTracker4.Web.Components.Toolbar.LoginLink;

public class LoginLinkViewComponent : AbpViewComponent
{
    public virtual IViewComponentResult Invoke()
    {
        return View("~/Components/Toolbar/LoginLink/Default.cshtml");
    }
}
