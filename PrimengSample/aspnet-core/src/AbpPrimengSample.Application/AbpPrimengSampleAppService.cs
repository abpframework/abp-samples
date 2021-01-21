using System;
using System.Collections.Generic;
using System.Text;
using AbpPrimengSample.Localization;
using Volo.Abp.Application.Services;

namespace AbpPrimengSample
{
    /* Inherit your application services from this class.
     */
    public abstract class AbpPrimengSampleAppService : ApplicationService
    {
        protected AbpPrimengSampleAppService()
        {
            LocalizationResource = typeof(AbpPrimengSampleResource);
        }
    }
}
