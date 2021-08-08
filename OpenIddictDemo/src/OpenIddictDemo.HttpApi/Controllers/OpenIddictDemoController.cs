using OpenIddictDemo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace OpenIddictDemo.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class OpenIddictDemoController : AbpController
    {
        protected OpenIddictDemoController()
        {
            LocalizationResource = typeof(OpenIddictDemoResource);
        }
    }
}