using System;
using System.Collections.Generic;
using System.Text;
using PasswordlessAuthentication.Localization;
using Volo.Abp.Application.Services;

namespace PasswordlessAuthentication
{
    /* Inherit your application services from this class.
     */
    public abstract class PasswordlessAuthenticationAppService : ApplicationService
    {
        protected PasswordlessAuthenticationAppService()
        {
            LocalizationResource = typeof(PasswordlessAuthenticationResource);
        }
    }
}
