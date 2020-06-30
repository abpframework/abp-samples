using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Components;
using Volo.Abp.DependencyInjection;

namespace OrganizationUnitSample.Web
{
    [Dependency(ReplaceServices = true)]
    public class OrganizationUnitSampleBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "OrganizationUnitSample";
    }
}
