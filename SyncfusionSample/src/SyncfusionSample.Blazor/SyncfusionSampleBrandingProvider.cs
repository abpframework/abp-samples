using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace SyncfusionSample.Blazor
{
    [Dependency(ReplaceServices = true)]
    public class SyncfusionSampleBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "SyncfusionSample";
    }
}
