using MatBlazorSample.Localization;
using Volo.Abp.AspNetCore.Components;

namespace MatBlazorSample.Blazor
{
    public abstract class MatBlazorSampleComponentBase : AbpComponentBase
    {
        protected MatBlazorSampleComponentBase()
        {
            LocalizationResource = typeof(MatBlazorSampleResource);
        }
    }
}
