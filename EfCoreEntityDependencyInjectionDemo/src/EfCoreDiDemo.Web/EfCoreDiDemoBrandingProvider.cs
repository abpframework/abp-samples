using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace EfCoreDiDemo.Web;

[Dependency(ReplaceServices = true)]
public class EfCoreDiDemoBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "EfCoreDiDemo";
}
