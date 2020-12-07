using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace DevExtremeSample.Web
{
    [Dependency(ReplaceServices = true)]
    public class DevExtremeSampleBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "DevExtremeSample";
    }
}
