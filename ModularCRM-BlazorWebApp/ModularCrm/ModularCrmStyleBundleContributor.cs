using Volo.Abp.AspNetCore.Mvc.UI.Bundling;

namespace ModularCrm;

public class ModularCrmStyleBundleContributor : BundleContributor
{
    public override void ConfigureBundle(BundleConfigurationContext context)
    {
        context.Files.Add(new BundleFile("main.css", true));
    }
}
