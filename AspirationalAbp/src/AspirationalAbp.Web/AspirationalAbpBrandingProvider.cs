using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace AspirationalAbp.Web;

[Dependency(ReplaceServices = true)]
public class AspirationalAbpBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "AspirationalAbp";
}
