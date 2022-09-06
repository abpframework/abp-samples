using System.Collections.Generic;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;

namespace EShopOnAbp.PublicWeb.Components.UserOrders;

public class UserOrderWidgetStyleContributor : BundleContributor
{
    public override void ConfigureBundle(BundleConfigurationContext context)
    {
        context.Files.AddIfNotContains("/components/user-orders/user-order-widget.css");
    }
}