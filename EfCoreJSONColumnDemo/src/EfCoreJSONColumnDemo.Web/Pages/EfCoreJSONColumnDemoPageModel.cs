using EfCoreJSONColumnDemo.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace EfCoreJSONColumnDemo.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class EfCoreJSONColumnDemoPageModel : AbpPageModel
{
    protected EfCoreJSONColumnDemoPageModel()
    {
        LocalizationResourceType = typeof(EfCoreJSONColumnDemoResource);
    }
}
