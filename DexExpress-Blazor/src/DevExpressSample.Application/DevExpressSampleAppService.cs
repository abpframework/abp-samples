using System;
using System.Collections.Generic;
using System.Text;
using DevExpressSample.Localization;
using Volo.Abp.Application.Services;

namespace DevExpressSample
{
    /* Inherit your application services from this class.
     */
    public abstract class DevExpressSampleAppService : ApplicationService
    {
        protected DevExpressSampleAppService()
        {
            LocalizationResource = typeof(DevExpressSampleResource);
        }
    }
}
