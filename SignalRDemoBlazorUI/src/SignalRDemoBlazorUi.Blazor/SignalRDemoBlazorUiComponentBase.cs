using SignalRDemoBlazorUi.Localization;
using Volo.Abp.AspNetCore.Components;

namespace SignalRDemoBlazorUi.Blazor;

public abstract class SignalRDemoBlazorUiComponentBase : AbpComponentBase
{
    protected SignalRDemoBlazorUiComponentBase()
    {
        LocalizationResource = typeof(SignalRDemoBlazorUiResource);
    }
}
