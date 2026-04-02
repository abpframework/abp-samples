using Volo.Abp.AspNetCore.Mvc.UI.Bundling;

namespace TravelPlanner;

public class TravelPlannerStyleBundleContributor : BundleContributor
{
    public override void ConfigureBundle(BundleConfigurationContext context)
    {
        context.Files.Add(new BundleFile("main.css", true));
    }
}