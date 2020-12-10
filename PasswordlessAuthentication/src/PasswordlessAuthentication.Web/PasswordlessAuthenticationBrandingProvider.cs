using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace PasswordlessAuthentication.Web
{
    [Dependency(ReplaceServices = true)]
    public class PasswordlessAuthenticationBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "PasswordlessAuthentication";
    }
}
