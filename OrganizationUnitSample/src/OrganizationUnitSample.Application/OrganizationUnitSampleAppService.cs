using System;
using System.Collections.Generic;
using System.Text;
using OrganizationUnitSample.Localization;
using Volo.Abp.Application.Services;

namespace OrganizationUnitSample
{
    /* Inherit your application services from this class.
     */
    public abstract class OrganizationUnitSampleAppService : ApplicationService
    {
        protected OrganizationUnitSampleAppService()
        {
            LocalizationResource = typeof(OrganizationUnitSampleResource);
        }
    }
}
