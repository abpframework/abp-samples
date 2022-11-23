using OutputCachingMiddleware.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace OutputCachingMiddleware.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class OutputCachingMiddlewarePageModel : AbpPageModel
{
    protected OutputCachingMiddlewarePageModel()
    {
        LocalizationResourceType = typeof(OutputCachingMiddlewareResource);
    }
}
