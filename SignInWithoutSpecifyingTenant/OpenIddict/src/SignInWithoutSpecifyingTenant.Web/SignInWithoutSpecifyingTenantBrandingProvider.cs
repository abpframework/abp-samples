using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace SignInWithoutSpecifyingTenant.Web;

[Dependency(ReplaceServices = true)]
public class SignInWithoutSpecifyingTenantBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "SignInWithoutSpecifyingTenant";
}
