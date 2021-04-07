using TodoApp.Localization;
using Volo.Abp.AspNetCore.Components;

namespace TodoApp.Blazor
{
    public abstract class TodoAppComponentBase : AbpComponentBase
    {
        protected TodoAppComponentBase()
        {
            LocalizationResource = typeof(TodoAppResource);
        }
    }
}
