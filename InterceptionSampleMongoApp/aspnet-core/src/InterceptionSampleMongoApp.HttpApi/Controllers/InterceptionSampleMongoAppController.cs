using InterceptionSampleMongoApp.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace InterceptionSampleMongoApp.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class InterceptionSampleMongoAppController : AbpControllerBase
{
    protected InterceptionSampleMongoAppController()
    {
        LocalizationResource = typeof(InterceptionSampleMongoAppResource);
    }
}
