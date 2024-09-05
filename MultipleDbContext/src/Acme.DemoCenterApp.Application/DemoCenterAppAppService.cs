using Acme.DemoCenterApp.Localization;
using Volo.Abp.Application.Services;

namespace Acme.DemoCenterApp;

/* Inherit your application services from this class.
 */
public abstract class DemoCenterAppAppService : ApplicationService
{
    protected DemoCenterAppAppService()
    {
        LocalizationResource = typeof(DemoCenterAppResource);
    }
}
