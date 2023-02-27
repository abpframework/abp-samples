using OpenId2Ids.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace OpenId2Ids.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class OpenId2IdsController : AbpControllerBase
{
    protected OpenId2IdsController()
    {
        LocalizationResource = typeof(OpenId2IdsResource);
    }
}
