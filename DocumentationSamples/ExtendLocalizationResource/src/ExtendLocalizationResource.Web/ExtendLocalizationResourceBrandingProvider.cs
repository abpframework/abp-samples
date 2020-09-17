using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Components;
using Volo.Abp.DependencyInjection;

namespace ExtendLocalizationResource.Web
{
    [Dependency(ReplaceServices = true)]
    public class ExtendLocalizationResourceBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "ExtendLocalizationResource";
    }
}
