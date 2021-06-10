using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace ElsaDemo.Web
{
    [Dependency(ReplaceServices = true)]
    public class ElsaDemoBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "ElsaDemo";
    }
}
