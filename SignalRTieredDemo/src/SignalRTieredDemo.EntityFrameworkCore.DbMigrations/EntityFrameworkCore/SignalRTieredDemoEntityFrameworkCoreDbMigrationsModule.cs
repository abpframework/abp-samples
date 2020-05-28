using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace SignalRTieredDemo.EntityFrameworkCore
{
    [DependsOn(
        typeof(SignalRTieredDemoEntityFrameworkCoreModule)
        )]
    public class SignalRTieredDemoEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<SignalRTieredDemoMigrationsDbContext>();
        }
    }
}
