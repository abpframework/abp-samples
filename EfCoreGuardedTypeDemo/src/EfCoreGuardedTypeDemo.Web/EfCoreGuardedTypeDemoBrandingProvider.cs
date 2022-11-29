using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace EfCoreGuardedTypeDemo.Web;

[Dependency(ReplaceServices = true)]
public class EfCoreGuardedTypeDemoBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "EfCoreGuardedTypeDemo";
}
