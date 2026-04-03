using Volo.Abp.AspNetCore.Mvc.UI.Bundling;

namespace BillMaster.Blazor;

public class BillMasterStyleBundleContributor : BundleContributor
{
    public override void ConfigureBundle(BundleConfigurationContext context)
    {
        context.Files.Add(new BundleFile("main.css", true));
    }
}
