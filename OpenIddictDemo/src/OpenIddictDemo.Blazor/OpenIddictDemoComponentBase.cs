using OpenIddictDemo.Localization;
using Volo.Abp.AspNetCore.Components;

namespace OpenIddictDemo.Blazor
{
    public abstract class OpenIddictDemoComponentBase : AbpComponentBase
    {
        protected OpenIddictDemoComponentBase()
        {
            LocalizationResource = typeof(OpenIddictDemoResource);
        }
    }
}
