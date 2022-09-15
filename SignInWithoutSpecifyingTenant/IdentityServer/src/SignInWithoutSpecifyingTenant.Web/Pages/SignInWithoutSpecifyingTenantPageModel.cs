using SignInWithoutSpecifyingTenant.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace SignInWithoutSpecifyingTenant.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class SignInWithoutSpecifyingTenantPageModel : AbpPageModel
    {
        protected SignInWithoutSpecifyingTenantPageModel()
        {
            LocalizationResourceType = typeof(SignInWithoutSpecifyingTenantResource);
        }
    }
}