using System;
using System.Collections.Generic;
using System.Text;
using InterceptionSampleMongoApp.Localization;
using Volo.Abp.Application.Services;

namespace InterceptionSampleMongoApp;

/* Inherit your application services from this class.
 */
public abstract class InterceptionSampleMongoAppAppService : ApplicationService
{
    protected InterceptionSampleMongoAppAppService()
    {
        LocalizationResource = typeof(InterceptionSampleMongoAppResource);
    }
}
