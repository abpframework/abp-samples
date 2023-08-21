using System;
using System.Collections.Generic;
using System.Text;
using SwaggerDemo.Localization;
using Volo.Abp.Application.Services;

namespace SwaggerDemo;

/* Inherit your application services from this class.
 */
public abstract class SwaggerDemoAppService : ApplicationService
{
    protected SwaggerDemoAppService()
    {
        LocalizationResource = typeof(SwaggerDemoResource);
    }
}
