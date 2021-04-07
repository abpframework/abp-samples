using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace TodoApp.EntityFrameworkCore
{
    [DependsOn(
        typeof(TodoAppEntityFrameworkCoreModule)
        )]
    public class TodoAppEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<TodoAppMigrationsDbContext>();
        }
    }
}
