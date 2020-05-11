using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace SignalRDemo.EntityFrameworkCore
{
    [DependsOn(
        typeof(SignalRDemoEntityFrameworkCoreModule)
        )]
    public class SignalRDemoEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<SignalRDemoMigrationsDbContext>();
        }
    }
}
