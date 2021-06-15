using System;
using System.Collections.Generic;
using System.Text;
using ConcurrencyDemo.Localization;
using Volo.Abp.Application.Services;

namespace ConcurrencyDemo
{
    /* Inherit your application services from this class.
     */
    public abstract class ConcurrencyDemoAppService : ApplicationService
    {
        protected ConcurrencyDemoAppService()
        {
            LocalizationResource = typeof(ConcurrencyDemoResource);
        }
    }
}
