using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace BackendAdminApp.Host
{
    public class BrandingProvider : DefaultBrandingProvider, ISingletonDependency
    {
        public override string AppName => "Backend Admin App";
    }
}
