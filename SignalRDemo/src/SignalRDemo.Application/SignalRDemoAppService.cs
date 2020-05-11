using System;
using System.Collections.Generic;
using System.Text;
using SignalRDemo.Localization;
using Volo.Abp.Application.Services;

namespace SignalRDemo
{
    /* Inherit your application services from this class.
     */
    public abstract class SignalRDemoAppService : ApplicationService
    {
        protected SignalRDemoAppService()
        {
            LocalizationResource = typeof(SignalRDemoResource);
        }
    }
}
