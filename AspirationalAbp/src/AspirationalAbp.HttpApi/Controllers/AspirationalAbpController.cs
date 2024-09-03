using AspirationalAbp.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace AspirationalAbp.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class AspirationalAbpController : AbpControllerBase
{
    protected AspirationalAbpController()
    {
        LocalizationResource = typeof(AspirationalAbpResource);
    }
}
