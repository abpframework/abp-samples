using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace ConcurrencyDemo.EntityFrameworkCore
{
    [DependsOn(
        typeof(ConcurrencyDemoEntityFrameworkCoreModule)
        )]
    public class ConcurrencyDemoEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<ConcurrencyDemoMigrationsDbContext>();
        }
    }
}
