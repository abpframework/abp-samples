using System;
using System.Collections.Generic;
using System.Text;
using ProfilerTiered.Localization;
using Volo.Abp.Application.Services;

namespace ProfilerTiered
{
    /* Inherit your application services from this class.
     */
    public abstract class ProfilerTieredAppService : ApplicationService
    {
        protected ProfilerTieredAppService()
        {
            LocalizationResource = typeof(ProfilerTieredResource);
        }
    }
}
