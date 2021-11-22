using System;
using System.Collections.Generic;
using System.Text;
using Profiler.Localization;
using Volo.Abp.Application.Services;

namespace Profiler
{
    /* Inherit your application services from this class.
     */
    public abstract class ProfilerAppService : ApplicationService
    {
        protected ProfilerAppService()
        {
            LocalizationResource = typeof(ProfilerResource);
        }
    }
}
