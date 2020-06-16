using CustomApplicationModules.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace CustomApplicationModules.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class CustomApplicationModulesPageModel : AbpPageModel
    {
        protected CustomApplicationModulesPageModel()
        {
            LocalizationResourceType = typeof(CustomApplicationModulesResource);
        }
    }
}