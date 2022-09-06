using System.Collections.Generic;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;

namespace EShopOnAbp.PublicWeb.Components.Toolbar.Cart;

public class CartWidgetStyleContributor : BundleContributor
{
    public override void ConfigureBundle(BundleConfigurationContext context)
    {
        context.Files.AddIfNotContains("/components/cart/cart-widget.css");
    }
}