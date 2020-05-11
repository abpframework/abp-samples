using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Components;
using Volo.Abp.DependencyInjection;

namespace SignalRDemo.Web
{
    [Dependency(ReplaceServices = true)]
    public class SignalRDemoBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "SignalRDemo";
    }
}
