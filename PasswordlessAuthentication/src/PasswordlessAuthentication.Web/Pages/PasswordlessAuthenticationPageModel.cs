using PasswordlessAuthentication.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace PasswordlessAuthentication.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class PasswordlessAuthenticationPageModel : AbpPageModel
    {
        protected PasswordlessAuthenticationPageModel()
        {
            LocalizationResourceType = typeof(PasswordlessAuthenticationResource);
        }
    }
}