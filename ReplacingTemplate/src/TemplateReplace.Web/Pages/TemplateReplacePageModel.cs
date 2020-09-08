using TemplateReplace.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace TemplateReplace.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class TemplateReplacePageModel : AbpPageModel
    {
        protected TemplateReplacePageModel()
        {
            LocalizationResourceType = typeof(TemplateReplaceResource);
        }
    }
}