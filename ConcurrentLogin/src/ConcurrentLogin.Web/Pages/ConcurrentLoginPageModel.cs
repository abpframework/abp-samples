using ConcurrentLogin.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace ConcurrentLogin.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class ConcurrentLoginPageModel : AbpPageModel
{
    protected ConcurrentLoginPageModel()
    {
        LocalizationResourceType = typeof(ConcurrentLoginResource);
    }
}
