using Ids2OpenId.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Ids2OpenId.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class Ids2OpenIdController : AbpControllerBase
{
    protected Ids2OpenIdController()
    {
        LocalizationResource = typeof(Ids2OpenIdResource);
    }
}
