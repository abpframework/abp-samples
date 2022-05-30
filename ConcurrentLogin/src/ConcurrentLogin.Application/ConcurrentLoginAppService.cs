using System;
using System.Collections.Generic;
using System.Text;
using ConcurrentLogin.Localization;
using Volo.Abp.Application.Services;

namespace ConcurrentLogin;

/* Inherit your application services from this class.
 */
public abstract class ConcurrentLoginAppService : ApplicationService
{
    protected ConcurrentLoginAppService()
    {
        LocalizationResource = typeof(ConcurrentLoginResource);
    }
}
