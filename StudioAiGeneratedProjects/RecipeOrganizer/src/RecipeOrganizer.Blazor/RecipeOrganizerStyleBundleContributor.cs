using Volo.Abp.AspNetCore.Mvc.UI.Bundling;

namespace RecipeOrganizer.Blazor;

public class RecipeOrganizerStyleBundleContributor : BundleContributor
{
    public override void ConfigureBundle(BundleConfigurationContext context)
    {
        context.Files.Add(new BundleFile("main.css", true));
    }
}
