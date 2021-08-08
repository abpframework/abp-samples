using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace OpenIddictDemo.Blazor
{
    [Dependency(ReplaceServices = true)]
    public class OpenIddictDemoBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "OpenIddictDemo";
    }
}
