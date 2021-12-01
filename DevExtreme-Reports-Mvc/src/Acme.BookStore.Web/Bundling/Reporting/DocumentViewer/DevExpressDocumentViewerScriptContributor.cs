using System.Collections.Generic;
using Acme.BookStore.Web.Bundling.Reporting.ThirdParty;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.Modularity;

namespace Acme.BookStore.Web.Bundling.Reporting.DocumentViewer;

[DependsOn(typeof(DevExpressReportingThirdPartyScriptContributor))]
public class DevExpressDocumentViewerScriptContributor : BundleContributor
{
    public override void ConfigureBundle(BundleConfigurationContext context)
    {
        context.Files.AddIfNotContains("/libs/devexpress-analytics-core/js/dx-analytics-core.min.js");
        context.Files.AddIfNotContains("/libs/devexpress-reporting/js/dx-webdocumentviewer.min.js");
    }
}