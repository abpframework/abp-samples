using BillMaster.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace BillMaster.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class BillMasterController : AbpControllerBase
{
    protected BillMasterController()
    {
        LocalizationResource = typeof(BillMasterResource);
    }
}
