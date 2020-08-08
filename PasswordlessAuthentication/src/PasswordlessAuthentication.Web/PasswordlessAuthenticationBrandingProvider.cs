using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Components;
using Volo.Abp.DependencyInjection;

namespace PasswordlessAuthentication.Web
{
    [Dependency(ReplaceServices = true)]
    public class PasswordlessAuthenticationBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "PasswordlessAuthentication";
    }
}
