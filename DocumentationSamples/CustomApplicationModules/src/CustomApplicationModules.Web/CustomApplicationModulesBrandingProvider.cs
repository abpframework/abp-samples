using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace CustomApplicationModules.Web
{
    [Dependency(ReplaceServices = true)]
    public class CustomApplicationModulesBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "CustomApplicationModules";
    }
}
