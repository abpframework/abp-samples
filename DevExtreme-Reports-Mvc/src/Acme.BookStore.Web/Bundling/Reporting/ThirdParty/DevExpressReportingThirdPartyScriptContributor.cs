using System.Collections.Generic;
using Acme.BookStore.Web.Bundling.Common;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.Modularity;

namespace Acme.BookStore.Web.Bundling.Reporting.ThirdParty;

[DependsOn(
    typeof(DevExtremeReportingCommonScriptContributor)
)]
public class DevExpressReportingThirdPartyScriptContributor : BundleContributor
{
    public override void ConfigureBundle(BundleConfigurationContext context)
    {
        // cldrj related scripts
        context.Files.AddIfNotContains("/libs/devexpress-reporting/cldrjs/cldr.js");
        context.Files.AddIfNotContains("/libs/devexpress-reporting/cldrjs/event.js");
        context.Files.AddIfNotContains("/libs/devexpress-reporting/cldrjs/supplemental.js");
        context.Files.AddIfNotContains("/libs/devexpress-reporting/cldrjs/unresolved.js");
        // globalize related scripts
        context.Files.AddIfNotContains("/libs/devexpress-reporting/globalize/globalize.js");
        context.Files.AddIfNotContains("/libs/devexpress-reporting/globalize/currency.js");
        context.Files.AddIfNotContains("/libs/devexpress-reporting/globalize/date.js");
        context.Files.AddIfNotContains("/libs/devexpress-reporting/globalize/message.js");
        context.Files.AddIfNotContains("/libs/devexpress-reporting/globalize/number.js");
        // ace-builds related scripts
        context.Files.AddIfNotContains("/libs/devexpress-reporting/ace-builds/ace.js");
        context.Files.AddIfNotContains("/libs/devexpress-reporting/ace-builds/ext-language_tools.js");
        context.Files.AddIfNotContains("/libs/devexpress-reporting/ace-builds/theme-ambiance.js");
        context.Files.AddIfNotContains("/libs/devexpress-reporting/ace-builds/theme-dreamweaver.js");
        context.Files.AddIfNotContains("/libs/devexpress-reporting/ace-builds/text.js");
    }
}