using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace EfCoreJSONColumnDemo.Web;

[Dependency(ReplaceServices = true)]
public class EfCoreJSONColumnDemoBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "EfCoreJSONColumnDemo";
}
