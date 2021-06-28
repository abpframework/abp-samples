using Volo.Abp.Bundling;

namespace ClientSimulationDemo.Blazor
{
    public class ClientSimulationDemoBundleContributor : IBundleContributor
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
