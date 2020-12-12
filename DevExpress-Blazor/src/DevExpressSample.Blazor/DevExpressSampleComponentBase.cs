using DevExpressSample.Localization;
using Volo.Abp.AspNetCore.Components;

namespace DevExpressSample.Blazor
{
    public abstract class DevExpressSampleComponentBase : AbpComponentBase
    {
        protected DevExpressSampleComponentBase()
        {
            LocalizationResource = typeof(DevExpressSampleResource);
        }
    }
}
