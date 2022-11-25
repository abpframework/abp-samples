using System;
using System.Collections.Generic;
using System.Text;
using OutputCachingMiddleware.Localization;
using Volo.Abp.Application.Services;

namespace OutputCachingMiddleware;

/* Inherit your application services from this class.
 */
public abstract class OutputCachingMiddlewareAppService : ApplicationService
{
    protected OutputCachingMiddlewareAppService()
    {
        LocalizationResource = typeof(OutputCachingMiddlewareResource);
    }
}
