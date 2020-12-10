using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace DevExpressSample.EntityFrameworkCore
{
    [DependsOn(
        typeof(DevExpressSampleEntityFrameworkCoreModule)
        )]
    public class DevExpressSampleEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<DevExpressSampleMigrationsDbContext>();
        }
    }
}
