using System;
using System.Collections.Generic;
using System.Text;
using MatBlazorSample.Localization;
using Volo.Abp.Application.Services;

namespace MatBlazorSample
{
    /* Inherit your application services from this class.
     */
    public abstract class MatBlazorSampleAppService : ApplicationService
    {
        protected MatBlazorSampleAppService()
        {
            LocalizationResource = typeof(MatBlazorSampleResource);
        }
    }
}
