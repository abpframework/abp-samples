using EfCoreDiDemo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace EfCoreDiDemo.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class EfCoreDiDemoController : AbpControllerBase
{
    protected EfCoreDiDemoController()
    {
        LocalizationResource = typeof(EfCoreDiDemoResource);
    }
}
