using TelerikUIExample.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace TelerikUIExample.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class TelerikUIExampleController : AbpControllerBase
{
    protected TelerikUIExampleController()
    {
        LocalizationResource = typeof(TelerikUIExampleResource);
    }
}
