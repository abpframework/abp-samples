using TodoApp.Localization;
using Volo.Abp.AspNetCore.Components;

namespace TodoApp;

public abstract class TodoAppComponentBase : AbpComponentBase
{
    protected TodoAppComponentBase()
    {
        LocalizationResource = typeof(TodoAppResource);
    }
}
