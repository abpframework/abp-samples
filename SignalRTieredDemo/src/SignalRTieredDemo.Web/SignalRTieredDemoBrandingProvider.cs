using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Components;
using Volo.Abp.DependencyInjection;

namespace SignalRTieredDemo.Web
{
    [Dependency(ReplaceServices = true)]
    public class SignalRTieredDemoBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "SignalRTieredDemo";
    }
}
