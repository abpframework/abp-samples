using Acme.ModuleA.Localization;
using Volo.Abp.Application.Services;

namespace Acme.ModuleA;

public abstract class ModuleAAppService : ApplicationService
{
    protected ModuleAAppService()
    {
        LocalizationResource = typeof(ModuleAResource);
        ObjectMapperContext = typeof(ModuleAApplicationModule);
    }
}
