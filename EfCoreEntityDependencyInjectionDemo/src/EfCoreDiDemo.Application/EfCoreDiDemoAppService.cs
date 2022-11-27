using System;
using System.Collections.Generic;
using System.Text;
using EfCoreDiDemo.Localization;
using Volo.Abp.Application.Services;

namespace EfCoreDiDemo;

/* Inherit your application services from this class.
 */
public abstract class EfCoreDiDemoAppService : ApplicationService
{
    protected EfCoreDiDemoAppService()
    {
        LocalizationResource = typeof(EfCoreDiDemoResource);
    }
}
