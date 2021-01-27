using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace CustomNgAppWithIdentityServer
{
    [Dependency(ReplaceServices = true)]
    public class CustomNgAppWithIdentityServerBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "CustomNgAppWithIdentityServer";
    }
}
