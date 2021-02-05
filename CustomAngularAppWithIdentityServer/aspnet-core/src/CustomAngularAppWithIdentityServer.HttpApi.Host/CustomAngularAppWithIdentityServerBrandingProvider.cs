using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace CustomAngularAppWithIdentityServer
{
    [Dependency(ReplaceServices = true)]
    public class CustomAngularAppWithIdentityServerBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "CustomAngularAppWithIdentityServer";
    }
}
