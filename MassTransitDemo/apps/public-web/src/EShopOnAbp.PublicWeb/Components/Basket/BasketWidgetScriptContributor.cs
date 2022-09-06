using System.Collections.Generic;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Packages.SignalR;
using Volo.Abp.Modularity;

namespace EShopOnAbp.PublicWeb.Components.Basket;

[DependsOn(typeof(SignalRBrowserScriptContributor))]
public class BasketWidgetScriptContributor : BundleContributor
{
    public override void ConfigureBundle(BundleConfigurationContext context)
    {
        context.Files.AddIfNotContains("/components/basket/basket-widget.js");
    }
}