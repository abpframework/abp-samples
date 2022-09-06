using System;
using System.Collections.Generic;
using System.Text;
using EShopOnAbp.AdministrationService.Localization;
using Volo.Abp.Application.Services;

namespace EShopOnAbp.AdministrationService
{
    /* Inherit your application services from this class.
     */
    public abstract class AdministrationServiceAppService : ApplicationService
    {
        protected AdministrationServiceAppService()
        {
            LocalizationResource = typeof(AdministrationServiceResource);
        }
    }
}
