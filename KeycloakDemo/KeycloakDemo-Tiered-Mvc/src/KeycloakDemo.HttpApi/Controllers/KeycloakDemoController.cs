using KeycloakDemo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace KeycloakDemo.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class KeycloakDemoController : AbpControllerBase
{
    protected KeycloakDemoController()
    {
        LocalizationResource = typeof(KeycloakDemoResource);
    }
}
