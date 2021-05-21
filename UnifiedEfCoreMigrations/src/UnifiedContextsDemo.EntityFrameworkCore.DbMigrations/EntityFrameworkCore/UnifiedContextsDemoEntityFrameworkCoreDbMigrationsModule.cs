using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace UnifiedContextsDemo.EntityFrameworkCore
{
    [DependsOn(
        typeof(UnifiedContextsDemoEntityFrameworkCoreModule)
        )]
    public class UnifiedContextsDemoEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<UnifiedContextsDemoMigrationsDbContext>();
        }
    }
}
