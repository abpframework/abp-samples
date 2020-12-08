using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace SignalRDemo.Web
{
    [Dependency(ReplaceServices = true)]
    public class SignalRDemoBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "SignalRDemo";
    }
}
