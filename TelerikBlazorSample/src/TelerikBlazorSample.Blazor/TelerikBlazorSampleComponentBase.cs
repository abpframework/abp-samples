using TelerikBlazorSample.Localization;
using Volo.Abp.AspNetCore.Components;

namespace TelerikBlazorSample.Blazor;

public abstract class TelerikBlazorSampleComponentBase : AbpComponentBase
{
    protected TelerikBlazorSampleComponentBase()
    {
        LocalizationResource = typeof(TelerikBlazorSampleResource);
    }
}
