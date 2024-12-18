using ModularCrm.Localization;
using Volo.Abp.Application.Services;

namespace ModularCrm;

/* Inherit your application services from this class.
 */
public abstract class ModularCrmAppService : ApplicationService
{
    protected ModularCrmAppService()
    {
        LocalizationResource = typeof(ModularCrmResource);
    }
}
