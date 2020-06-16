using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Components;
using Volo.Abp.DependencyInjection;

namespace CustomApplicationModules.Web
{
    [Dependency(ReplaceServices = true)]
    public class CustomApplicationModulesBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "CustomApplicationModules";
    }
}
