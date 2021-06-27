using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace UnifiedContextsDemo.Web
{
    [Dependency(ReplaceServices = true)]
    public class UnifiedContextsDemoBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "UnifiedContextsDemo";
    }
}
