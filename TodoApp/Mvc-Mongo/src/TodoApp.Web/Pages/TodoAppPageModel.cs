using TodoApp.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace TodoApp.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class TodoAppPageModel : AbpPageModel
    {
        protected TodoAppPageModel()
        {
            LocalizationResourceType = typeof(TodoAppResource);
        }
    }
}