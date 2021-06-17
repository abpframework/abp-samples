using Volo.Abp.Bundling;

namespace DevExpressSample.Blazor
{
    public class DevExpressSampleBundleContributor : IBundleContributor
    {
        public void AddScripts(BundleContext context)
        {
        }

        public void AddStyles(BundleContext context)
        {
            context.Add("main.css", true);
        }
    }
}
