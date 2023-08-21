using SwaggerDemo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace SwaggerDemo.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class SwaggerDemoController : AbpControllerBase
{
    protected SwaggerDemoController()
    {
        LocalizationResource = typeof(SwaggerDemoResource);
    }
}
