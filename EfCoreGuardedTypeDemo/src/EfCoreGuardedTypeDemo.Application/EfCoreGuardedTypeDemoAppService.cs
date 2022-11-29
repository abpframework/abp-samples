using System;
using System.Collections.Generic;
using System.Text;
using EfCoreGuardedTypeDemo.Localization;
using Volo.Abp.Application.Services;

namespace EfCoreGuardedTypeDemo;

/* Inherit your application services from this class.
 */
public abstract class EfCoreGuardedTypeDemoAppService : ApplicationService
{
    protected EfCoreGuardedTypeDemoAppService()
    {
        LocalizationResource = typeof(EfCoreGuardedTypeDemoResource);
    }
}
