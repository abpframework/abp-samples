using SignInWithoutSpecifyingTenant.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace SignInWithoutSpecifyingTenant.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class SignInWithoutSpecifyingTenantController : AbpControllerBase
{
    protected SignInWithoutSpecifyingTenantController()
    {
        LocalizationResource = typeof(SignInWithoutSpecifyingTenantResource);
    }
}
