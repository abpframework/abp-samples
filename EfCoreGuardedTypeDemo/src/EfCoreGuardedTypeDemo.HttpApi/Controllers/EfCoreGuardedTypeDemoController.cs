using EfCoreGuardedTypeDemo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace EfCoreGuardedTypeDemo.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class EfCoreGuardedTypeDemoController : AbpControllerBase
{
    protected EfCoreGuardedTypeDemoController()
    {
        LocalizationResource = typeof(EfCoreGuardedTypeDemoResource);
    }
}
