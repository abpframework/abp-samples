using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace ModularCrm.Web;

[Dependency(ReplaceServices = true)]
public class ModularCrmBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "ModularCrm";
}
