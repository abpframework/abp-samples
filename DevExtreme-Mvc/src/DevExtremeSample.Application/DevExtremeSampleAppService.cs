using System;
using System.Collections.Generic;
using System.Text;
using DevExtremeSample.Localization;
using Volo.Abp.Application.Services;

namespace DevExtremeSample
{
    /* Inherit your application services from this class.
     */
    public abstract class DevExtremeSampleAppService : ApplicationService
    {
        protected DevExtremeSampleAppService()
        {
            LocalizationResource = typeof(DevExtremeSampleResource);
        }
    }
}
