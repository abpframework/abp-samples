using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace ConcurrencyDemo.Web
{
    [Dependency(ReplaceServices = true)]
    public class ConcurrencyDemoBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "ConcurrencyDemo";
    }
}
