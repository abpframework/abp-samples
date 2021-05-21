using System;
using System.Collections.Generic;
using System.Text;
using UnifiedContextsDemo.Localization;
using Volo.Abp.Application.Services;

namespace UnifiedContextsDemo
{
    /* Inherit your application services from this class.
     */
    public abstract class UnifiedContextsDemoAppService : ApplicationService
    {
        protected UnifiedContextsDemoAppService()
        {
            LocalizationResource = typeof(UnifiedContextsDemoResource);
        }
    }
}
