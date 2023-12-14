using System;
using System.Collections.Generic;
using System.Text;
using SignalRDemoBlazorUi.Localization;
using Volo.Abp.Application.Services;

namespace SignalRDemoBlazorUi;

/* Inherit your application services from this class.
 */
public abstract class SignalRDemoBlazorUiAppService : ApplicationService
{
    protected SignalRDemoBlazorUiAppService()
    {
        LocalizationResource = typeof(SignalRDemoBlazorUiResource);
    }
}
