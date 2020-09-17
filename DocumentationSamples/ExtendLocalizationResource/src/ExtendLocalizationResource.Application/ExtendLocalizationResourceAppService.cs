using System;
using System.Collections.Generic;
using System.Text;
using ExtendLocalizationResource.Localization;
using Volo.Abp.Application.Services;

namespace ExtendLocalizationResource
{
    /* Inherit your application services from this class.
     */
    public abstract class ExtendLocalizationResourceAppService : ApplicationService
    {
        protected ExtendLocalizationResourceAppService()
        {
            LocalizationResource = typeof(ExtendLocalizationResourceResource);
        }
    }
}
