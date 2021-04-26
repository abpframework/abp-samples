using SyncfusionSample.Localization;
using Volo.Abp.AspNetCore.Components;

namespace SyncfusionSample.Blazor
{
    public abstract class SyncfusionSampleComponentBase : AbpComponentBase
    {
        protected SyncfusionSampleComponentBase()
        {
            LocalizationResource = typeof(SyncfusionSampleResource);
        }
    }
}
