using FileActionsDemo.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FileActionsDemo.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class FileActionsDemoPageModel : AbpPageModel
    {
        protected FileActionsDemoPageModel()
        {
            LocalizationResourceType = typeof(FileActionsDemoResource);
        }
    }
}