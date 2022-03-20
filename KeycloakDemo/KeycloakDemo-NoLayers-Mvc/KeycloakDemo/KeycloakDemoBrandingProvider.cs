using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace KeycloakDemo;

[Dependency(ReplaceServices = true)]
public class KeycloakDemoBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "KeycloakDemo";
}
