using SeparateBackgroundJob.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace SeparateBackgroundJob.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class SeparateBackgroundJobPageModel : AbpPageModel
{
    protected SeparateBackgroundJobPageModel()
    {
        LocalizationResourceType = typeof(SeparateBackgroundJobResource);
    }
}
