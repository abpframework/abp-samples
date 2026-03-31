using QuickBills.Localization;
using Volo.Abp.Application.Services;

namespace QuickBills;

/* Inherit your application services from this class.
 */
public abstract class QuickBillsAppService : ApplicationService
{
    protected QuickBillsAppService()
    {
        LocalizationResource = typeof(QuickBillsResource);
    }
}
