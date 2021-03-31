using System;
using System.Collections.Generic;
using System.Text;
using SignInWithoutSpecifyingTenant.Localization;
using Volo.Abp.Application.Services;

namespace SignInWithoutSpecifyingTenant
{
    /* Inherit your application services from this class.
     */
    public abstract class SignInWithoutSpecifyingTenantAppService : ApplicationService
    {
        protected SignInWithoutSpecifyingTenantAppService()
        {
            LocalizationResource = typeof(SignInWithoutSpecifyingTenantResource);
        }
    }
}
