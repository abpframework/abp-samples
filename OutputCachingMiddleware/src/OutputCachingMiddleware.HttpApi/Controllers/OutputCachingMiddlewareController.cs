using OutputCachingMiddleware.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace OutputCachingMiddleware.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class OutputCachingMiddlewareController : AbpControllerBase
{
    protected OutputCachingMiddlewareController()
    {
        LocalizationResource = typeof(OutputCachingMiddlewareResource);
    }
}
