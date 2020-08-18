using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace DevExtremeSample.EntityFrameworkCore
{
    [DependsOn(
        typeof(DevExtremeSampleEntityFrameworkCoreModule)
        )]
    public class DevExtremeSampleEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<DevExtremeSampleMigrationsDbContext>();
        }
    }
}
