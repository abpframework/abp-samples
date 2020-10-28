using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace ClientSimulationDemo.Simulator
{
    [Dependency(ReplaceServices = true)]
    public class BrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "Client Simulation";
    }
}
