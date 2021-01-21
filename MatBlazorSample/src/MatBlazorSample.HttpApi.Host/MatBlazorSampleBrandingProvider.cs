using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace MatBlazorSample
{
    [Dependency(ReplaceServices = true)]
    public class MatBlazorSampleBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "MatBlazorSample";
    }
}
