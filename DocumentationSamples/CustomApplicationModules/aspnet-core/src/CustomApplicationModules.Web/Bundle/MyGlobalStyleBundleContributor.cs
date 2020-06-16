using Volo.Abp.AspNetCore.Mvc.UI.Bundling;

namespace CustomApplicationModules.Web.Bundle
{
    public class MyGlobalStyleBundleContributor : BundleContributor
    {
        public override void ConfigureBundle(BundleConfigurationContext context)
        {
            //context.Files.Clear();
            context.Files.Add("/styles/my-global-styles.css");
        }
    }
}
