using SignalRDemoBlazorUi.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace SignalRDemoBlazorUi.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class SignalRDemoBlazorUiController : AbpControllerBase
{
    protected SignalRDemoBlazorUiController()
    {
        LocalizationResource = typeof(SignalRDemoBlazorUiResource);
    }
}
