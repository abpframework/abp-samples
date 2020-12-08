using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace SignalRTieredDemo.Web
{
    [Dependency(ReplaceServices = true)]
    public class SignalRTieredDemoBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "SignalRTieredDemo";
    }
}
