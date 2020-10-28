using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace ClientSimulationDemo.EntityFrameworkCore
{
    [DependsOn(
        typeof(ClientSimulationDemoEntityFrameworkCoreModule)
        )]
    public class ClientSimulationDemoEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<ClientSimulationDemoMigrationsDbContext>();
        }
    }
}
