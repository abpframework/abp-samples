using System;
using System.Collections.Generic;
using System.Text;
using SignalRTieredDemo.Localization;
using Volo.Abp.Application.Services;

namespace SignalRTieredDemo
{
    /* Inherit your application services from this class.
     */
    public abstract class SignalRTieredDemoAppService : ApplicationService
    {
        protected SignalRTieredDemoAppService()
        {
            LocalizationResource = typeof(SignalRTieredDemoResource);
        }
    }
}
