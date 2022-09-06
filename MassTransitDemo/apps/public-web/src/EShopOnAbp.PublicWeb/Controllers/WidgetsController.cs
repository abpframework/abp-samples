using EShopOnAbp.PublicWeb.Components.Basket;
using EShopOnAbp.PublicWeb.Components.Toolbar.Cart;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace EShopOnAbp.PublicWeb.Controllers;

[Route("Widgets")]
public class WidgetsController : AbpController
{
    [HttpGet]
    [Route("Basket")]
    public IActionResult Counters()
    {
        return ViewComponent(typeof(BasketWidgetViewComponent));
    }

    [HttpGet]
    [Route("Cart")]
    public IActionResult GetCartWidget()
    {
        return ViewComponent(typeof(CartWidgetViewComponent));
    }
}