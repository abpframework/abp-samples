using TodoApp.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace TodoApp.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class TodoAppController : AbpControllerBase
{
    protected TodoAppController()
    {
        LocalizationResource = typeof(TodoAppResource);
    }
}
