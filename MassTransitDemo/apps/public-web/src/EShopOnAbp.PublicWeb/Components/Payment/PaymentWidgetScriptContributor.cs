using System.Collections.Generic;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Packages.SignalR;
using Volo.Abp.Modularity;

namespace EShopOnAbp.PublicWeb.Components.Payment;

[DependsOn(typeof(SignalRBrowserScriptContributor))]
public class PaymentWidgetScriptContributor : BundleContributor
{
    public override void ConfigureBundle(BundleConfigurationContext context)
    {
        context.Files.AddIfNotContains("/components/payment/payment-widget.js");
    }
}