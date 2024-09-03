using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace AspirationalAbp;

[Dependency(ReplaceServices = true)]
public class AspirationalAbpBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "AspirationalAbp";
}
