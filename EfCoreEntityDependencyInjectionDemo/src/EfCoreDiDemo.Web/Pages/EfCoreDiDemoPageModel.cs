using EfCoreDiDemo.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace EfCoreDiDemo.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class EfCoreDiDemoPageModel : AbpPageModel
{
    protected EfCoreDiDemoPageModel()
    {
        LocalizationResourceType = typeof(EfCoreDiDemoResource);
    }
}
