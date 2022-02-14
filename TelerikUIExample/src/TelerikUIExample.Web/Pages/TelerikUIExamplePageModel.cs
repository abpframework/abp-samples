using TelerikUIExample.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace TelerikUIExample.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class TelerikUIExamplePageModel : AbpPageModel
{
    protected TelerikUIExamplePageModel()
    {
        LocalizationResourceType = typeof(TelerikUIExampleResource);
    }
}
