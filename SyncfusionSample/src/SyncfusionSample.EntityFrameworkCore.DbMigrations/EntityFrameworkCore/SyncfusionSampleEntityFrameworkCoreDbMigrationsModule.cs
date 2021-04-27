using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace SyncfusionSample.EntityFrameworkCore
{
    [DependsOn(
        typeof(SyncfusionSampleEntityFrameworkCoreModule)
        )]
    public class SyncfusionSampleEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<SyncfusionSampleMigrationsDbContext>();
        }
    }
}
