using System.Collections.Generic;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Packages.JQuery;
using Volo.Abp.Modularity;

namespace TelerikComponents.Web.Bundling
{
    [DependsOn(
        typeof(JQueryScriptContributor)
        )]
    public class KendoScriptContributor : BundleContributor
    {
        public override void ConfigureBundle(BundleConfigurationContext context)
        {
            context.Files.AddIfNotContains("/libs/kendo/js/kendo.all.min.js"); // This is the output of our webpack step
            context.Files.AddIfNotContains("/libs/kendo/js/kendo.aspnetmvc.min.js");
        }
    }
}