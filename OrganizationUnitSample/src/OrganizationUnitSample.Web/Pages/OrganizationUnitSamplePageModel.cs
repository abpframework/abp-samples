using OrganizationUnitSample.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace OrganizationUnitSample.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class OrganizationUnitSamplePageModel : AbpPageModel
    {
        protected OrganizationUnitSamplePageModel()
        {
            LocalizationResourceType = typeof(OrganizationUnitSampleResource);
        }
    }
}