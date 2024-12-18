using ModularCrm.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace ModularCrm.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class ModularCrmController : AbpControllerBase
{
    protected ModularCrmController()
    {
        LocalizationResource = typeof(ModularCrmResource);
    }
}
