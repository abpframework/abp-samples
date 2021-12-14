using MyCompanyName.MyProjectName.Domain.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace MyCompanyName.MyProjectName.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class MyProjectNamePageModel : AbpPageModel
{
    protected MyProjectNamePageModel()
    {
        LocalizationResourceType = typeof(MyProjectNameResource);
    }
}
