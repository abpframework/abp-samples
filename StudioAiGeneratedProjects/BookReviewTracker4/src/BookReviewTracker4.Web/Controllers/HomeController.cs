using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace BookReviewTracker4.Web.Controllers;

public class HomeController : AbpController
{
    public IActionResult Index()
    {
        return Redirect("~/Dashboard");
    }
}
