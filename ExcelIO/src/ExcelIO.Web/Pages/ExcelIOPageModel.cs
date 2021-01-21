using ExcelIO.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace ExcelIO.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class ExcelIOPageModel : AbpPageModel
    {
        protected ExcelIOPageModel()
        {
            LocalizationResourceType = typeof(ExcelIOResource);
        }
    }
}