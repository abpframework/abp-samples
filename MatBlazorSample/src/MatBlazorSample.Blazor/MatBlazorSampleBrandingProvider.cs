using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace MatBlazorSample.Blazor
{
    [Dependency(ReplaceServices = true)]
    public class MatBlazorSampleBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "MatBlazorSample";
    }
}
