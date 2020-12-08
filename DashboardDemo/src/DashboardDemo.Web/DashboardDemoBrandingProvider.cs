using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace DashboardDemo.Web
{
    [Dependency(ReplaceServices = true)]
    public class DashboardDemoBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "DashboardDemo";
    }
}
