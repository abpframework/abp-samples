using System;
using System.Collections.Generic;
using System.Text;
using SeparateBackgroundJob.Localization;
using Volo.Abp.Application.Services;

namespace SeparateBackgroundJob;

/* Inherit your application services from this class.
 */
public abstract class SeparateBackgroundJobAppService : ApplicationService
{
    protected SeparateBackgroundJobAppService()
    {
        LocalizationResource = typeof(SeparateBackgroundJobResource);
    }
}
