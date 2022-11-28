using System;
using System.Collections.Generic;
using System.Text;
using EfCoreJSONColumnDemo.Localization;
using Volo.Abp.Application.Services;

namespace EfCoreJSONColumnDemo;

/* Inherit your application services from this class.
 */
public abstract class EfCoreJSONColumnDemoAppService : ApplicationService
{
    protected EfCoreJSONColumnDemoAppService()
    {
        LocalizationResource = typeof(EfCoreJSONColumnDemoResource);
    }
}
