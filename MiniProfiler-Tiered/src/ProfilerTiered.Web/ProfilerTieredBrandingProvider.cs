using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace ProfilerTiered.Web
{
    [Dependency(ReplaceServices = true)]
    public class ProfilerTieredBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "ProfilerTiered";
    }
}
