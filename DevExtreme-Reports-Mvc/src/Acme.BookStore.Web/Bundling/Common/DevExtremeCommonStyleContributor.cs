using System.Collections.Generic;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;

namespace Acme.BookStore.Web.Bundling.Common;

public class DevExtremeCommonStyleContributor : BundleContributor
{
    public override void ConfigureBundle(BundleConfigurationContext context)
    {
        context.Files.AddIfNotContains("/libs/devextreme/css/dx.common.css");
        context.Files.AddIfNotContains("/libs/devextreme/css/dx.light.css");
    }
}