using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace DapperDemo;

[Dependency(ReplaceServices = true)]
public class DapperDemoBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "DapperDemo";
}
