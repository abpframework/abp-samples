using System;
using System.Collections.Generic;
using System.Text;
using TodoApp.Localization;
using Volo.Abp.Application.Services;

namespace TodoApp;

/* Inherit your application services from this class.
 */
public abstract class TodoAppAppService : ApplicationService
{
    protected TodoAppAppService()
    {
        LocalizationResource = typeof(TodoAppResource);
    }
}
