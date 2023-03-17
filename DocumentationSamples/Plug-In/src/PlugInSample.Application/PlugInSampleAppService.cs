using System;
using System.Collections.Generic;
using System.Text;
using PlugInSample.Localization;
using Volo.Abp.Application.Services;

namespace PlugInSample;

/* Inherit your application services from this class.
 */
public abstract class PlugInSampleAppService : ApplicationService
{
    protected PlugInSampleAppService()
    {
        LocalizationResource = typeof(PlugInSampleResource);
    }
}
