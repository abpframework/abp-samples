using Acme.DemoCenterApp.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Acme.DemoCenterApp.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class DemoCenterAppController : AbpControllerBase
{
    protected DemoCenterAppController()
    {
        LocalizationResource = typeof(DemoCenterAppResource);
    }
}
