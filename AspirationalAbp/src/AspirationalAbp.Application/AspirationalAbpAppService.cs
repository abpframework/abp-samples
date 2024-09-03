using System;
using System.Collections.Generic;
using System.Text;
using AspirationalAbp.Localization;
using Volo.Abp.Application.Services;

namespace AspirationalAbp;

/* Inherit your application services from this class.
 */
public abstract class AspirationalAbpAppService : ApplicationService
{
    protected AspirationalAbpAppService()
    {
        LocalizationResource = typeof(AspirationalAbpResource);
    }
}
