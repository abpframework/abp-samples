using ClientSimulationDemo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace ClientSimulationDemo.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(ClientSimulationDemoEntityFrameworkCoreDbMigrationsModule),
        typeof(ClientSimulationDemoApplicationContractsModule)
        )]
    public class ClientSimulationDemoDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
