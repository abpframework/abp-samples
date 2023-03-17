using PlugInSample.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace PlugInSample.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class PlugInSampleController : AbpControllerBase
{
    protected PlugInSampleController()
    {
        LocalizationResource = typeof(PlugInSampleResource);
    }
}
