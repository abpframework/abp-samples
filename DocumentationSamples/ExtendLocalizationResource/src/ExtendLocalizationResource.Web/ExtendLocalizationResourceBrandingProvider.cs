using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace ExtendLocalizationResource.Web
{
    [Dependency(ReplaceServices = true)]
    public class ExtendLocalizationResourceBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "ExtendLocalizationResource";
    }
}
