using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace PublicWebSite.Host
{
    public class BrandingProvider : DefaultBrandingProvider, ISingletonDependency
    {
        public override string AppName => "Public Web Site";
    }
}
