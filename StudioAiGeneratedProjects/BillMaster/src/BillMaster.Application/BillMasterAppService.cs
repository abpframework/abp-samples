using BillMaster.Localization;
using Volo.Abp.Application.Services;

namespace BillMaster;

/* Inherit your application services from this class.
 */
public abstract class BillMasterAppService : ApplicationService
{
    protected BillMasterAppService()
    {
        LocalizationResource = typeof(BillMasterResource);
    }
}
