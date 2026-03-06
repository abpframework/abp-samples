using Volo.Abp.Application.Services;
using NG.ModularCRM.Localization;

namespace NG.ModularCRM.Services;

/* Inherit your application services from this class. */
public abstract class ModularCRMAppService : ApplicationService
{
    protected ModularCRMAppService()
    {
        LocalizationResource = typeof(ModularCRMResource);
    }
}