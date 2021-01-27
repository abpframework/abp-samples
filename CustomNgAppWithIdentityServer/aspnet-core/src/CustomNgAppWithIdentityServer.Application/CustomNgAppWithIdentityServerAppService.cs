using CustomNgAppWithIdentityServer.Localization;
using Volo.Abp.Application.Services;

namespace CustomNgAppWithIdentityServer
{
    /* Inherit your application services from this class.
     */
    public abstract class CustomNgAppWithIdentityServerAppService : ApplicationService
    {
        protected CustomNgAppWithIdentityServerAppService()
        {
            LocalizationResource = typeof(CustomNgAppWithIdentityServerResource);
        }
    }
}
