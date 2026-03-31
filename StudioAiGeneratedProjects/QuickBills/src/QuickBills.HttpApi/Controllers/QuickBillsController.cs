using QuickBills.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace QuickBills.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class QuickBillsController : AbpControllerBase
{
    protected QuickBillsController()
    {
        LocalizationResource = typeof(QuickBillsResource);
    }
}
