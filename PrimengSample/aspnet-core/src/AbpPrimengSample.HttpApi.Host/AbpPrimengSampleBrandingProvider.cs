using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace AbpPrimengSample
{
    [Dependency(ReplaceServices = true)]
    public class AbpPrimengSampleBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "AbpPrimengSample";
    }
}
