using SeparateBackgroundJob.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace SeparateBackgroundJob.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class SeparateBackgroundJobController : AbpControllerBase
{
    protected SeparateBackgroundJobController()
    {
        LocalizationResource = typeof(SeparateBackgroundJobResource);
    }
}
