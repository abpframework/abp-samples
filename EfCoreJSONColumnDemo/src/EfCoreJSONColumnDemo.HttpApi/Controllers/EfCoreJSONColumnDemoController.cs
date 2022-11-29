using EfCoreJSONColumnDemo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace EfCoreJSONColumnDemo.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class EfCoreJSONColumnDemoController : AbpControllerBase
{
    protected EfCoreJSONColumnDemoController()
    {
        LocalizationResource = typeof(EfCoreJSONColumnDemoResource);
    }
}
