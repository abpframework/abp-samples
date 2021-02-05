using System;
using System.Collections.Generic;
using System.Text;
using CustomAngularAppWithIdentityServer.Localization;
using Volo.Abp.Application.Services;

namespace CustomAngularAppWithIdentityServer
{
    /* Inherit your application services from this class.
     */
    public abstract class CustomAngularAppWithIdentityServerAppService : ApplicationService
    {
        protected CustomAngularAppWithIdentityServerAppService()
        {
            LocalizationResource = typeof(CustomAngularAppWithIdentityServerResource);
        }
    }
}
