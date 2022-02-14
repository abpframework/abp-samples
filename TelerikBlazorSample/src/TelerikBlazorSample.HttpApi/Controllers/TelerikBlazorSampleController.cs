using TelerikBlazorSample.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace TelerikBlazorSample.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class TelerikBlazorSampleController : AbpControllerBase
{
    protected TelerikBlazorSampleController()
    {
        LocalizationResource = typeof(TelerikBlazorSampleResource);
    }
}
