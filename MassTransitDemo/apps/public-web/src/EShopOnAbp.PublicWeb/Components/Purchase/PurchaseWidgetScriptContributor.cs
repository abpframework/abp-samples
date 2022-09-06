using System.Collections.Generic;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Packages.SignalR;
using Volo.Abp.Modularity;

namespace EShopOnAbp.PublicWeb.Components.Purchase;

[DependsOn(typeof(SignalRBrowserScriptContributor))]
public class PurchaseWidgetScriptContributor : BundleContributor
{
    public override void ConfigureBundle(BundleConfigurationContext context)
    {
        context.Files.AddIfNotContains("/components/purchase/purchase-widget.js");
    }
}