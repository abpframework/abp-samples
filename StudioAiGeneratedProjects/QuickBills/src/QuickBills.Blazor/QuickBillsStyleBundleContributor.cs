using Volo.Abp.AspNetCore.Mvc.UI.Bundling;

namespace QuickBills.Blazor;

public class QuickBillsStyleBundleContributor : BundleContributor
{
    public override void ConfigureBundle(BundleConfigurationContext context)
    {
        context.Files.Add(new BundleFile("main.css", true));
    }
}
