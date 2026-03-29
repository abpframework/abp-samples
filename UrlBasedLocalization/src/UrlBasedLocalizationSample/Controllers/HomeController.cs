using System.Globalization;
using Microsoft.AspNetCore.Mvc;

namespace UrlBasedLocalizationSample.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        ViewBag.CurrentCulture = CultureInfo.CurrentCulture.Name;
        return View();
    }

    public IActionResult About()
    {
        return View();
    }
}
