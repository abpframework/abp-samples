using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace EShopOnAbp.Shared.Hosting.AspNetCore
{
    [Dependency(ReplaceServices = true)]
    public class EShopOnAbpBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "EShopOnAbp";
    }
}
