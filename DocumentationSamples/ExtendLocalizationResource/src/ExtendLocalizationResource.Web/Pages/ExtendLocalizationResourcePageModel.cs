using ExtendLocalizationResource.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace ExtendLocalizationResource.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class ExtendLocalizationResourcePageModel : AbpPageModel
    {
        protected ExtendLocalizationResourcePageModel()
        {
            LocalizationResourceType = typeof(ExtendLocalizationResourceResource);
        }
    }
}