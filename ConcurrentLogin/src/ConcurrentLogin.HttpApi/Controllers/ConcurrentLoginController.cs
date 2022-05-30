using ConcurrentLogin.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace ConcurrentLogin.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class ConcurrentLoginController : AbpControllerBase
{
    protected ConcurrentLoginController()
    {
        LocalizationResource = typeof(ConcurrentLoginResource);
    }
}
