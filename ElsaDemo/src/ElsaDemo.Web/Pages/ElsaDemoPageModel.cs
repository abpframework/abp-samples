using ElsaDemo.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace ElsaDemo.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class ElsaDemoPageModel : AbpPageModel
    {
        protected ElsaDemoPageModel()
        {
            LocalizationResourceType = typeof(ElsaDemoResource);
        }
    }
}