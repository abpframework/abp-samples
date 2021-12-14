using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace MyCompanyName.MyProjectName.Controllers.Home;

public class HomeController : AbpController
{
    public IActionResult Index()
    {
        return Redirect("~/swagger");
    }
}