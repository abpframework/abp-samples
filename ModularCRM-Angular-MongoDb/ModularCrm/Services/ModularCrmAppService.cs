using Volo.Abp.Application.Services;
using ModularCrm.Localization;

namespace ModularCrm.Services;

/* Inherit your application services from this class. */
public abstract class ModularCrmAppService : ApplicationService
{
    protected ModularCrmAppService()
    {
        LocalizationResource = typeof(ModularCrmResource);
    }
}