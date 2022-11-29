using EfCoreGuardedTypeDemo.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace EfCoreGuardedTypeDemo.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class EfCoreGuardedTypeDemoPageModel : AbpPageModel
{
    protected EfCoreGuardedTypeDemoPageModel()
    {
        LocalizationResourceType = typeof(EfCoreGuardedTypeDemoResource);
    }
}
