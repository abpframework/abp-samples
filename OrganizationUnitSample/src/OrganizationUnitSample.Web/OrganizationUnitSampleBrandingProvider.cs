using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace OrganizationUnitSample.Web
{
    [Dependency(ReplaceServices = true)]
    public class OrganizationUnitSampleBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "OrganizationUnitSample";
    }
}
