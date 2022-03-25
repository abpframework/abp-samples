using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace KeycloakDemo.Web;

[Dependency(ReplaceServices = true)]
public class KeycloakDemoBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "KeycloakDemo";
}
