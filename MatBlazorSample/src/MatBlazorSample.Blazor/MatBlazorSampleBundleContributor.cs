using Volo.Abp.Bundling;

namespace MatBlazorSample.Blazor
{
    public class MatBlazorSampleBundleContributor : IBundleContributor
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