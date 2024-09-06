using Acme.ModuleA.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Acme.ModuleA;

public abstract class ModuleAController : AbpControllerBase
{
    protected ModuleAController()
    {
        LocalizationResource = typeof(ModuleAResource);
    }
}
