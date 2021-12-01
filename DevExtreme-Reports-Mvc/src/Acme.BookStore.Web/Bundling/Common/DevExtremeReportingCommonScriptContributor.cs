using System.Collections.Generic;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Packages.JQuery;
using Volo.Abp.Modularity;

namespace Acme.BookStore.Web.Bundling.Common;

[DependsOn(
    typeof(JQueryScriptContributor)
)]
public class DevExtremeReportingCommonScriptContributor : BundleContributor
{
    public override void ConfigureBundle(BundleConfigurationContext context)
    {
        context.Files.AddIfNotContains("/libs/devextreme/js/jquery-ui.min.js");
        context.Files.AddIfNotContains("/libs/devexpress-reporting/js/knockout-latest.js");
        context.Files.AddIfNotContains("/libs/devextreme/js/dx.all.js"); // Has to be added after jquery and knockout
    }
}