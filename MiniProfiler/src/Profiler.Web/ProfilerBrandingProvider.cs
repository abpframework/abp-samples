using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace Profiler.Web
{
    [Dependency(ReplaceServices = true)]
    public class ProfilerBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "Profiler";
    }
}
