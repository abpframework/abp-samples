using System;
using System.Collections.Generic;
using System.Text;
using TelerikBlazorSample.Localization;
using Volo.Abp.Application.Services;

namespace TelerikBlazorSample;

/* Inherit your application services from this class.
 */
public abstract class TelerikBlazorSampleAppService : ApplicationService
{
    protected TelerikBlazorSampleAppService()
    {
        LocalizationResource = typeof(TelerikBlazorSampleResource);
    }
}
