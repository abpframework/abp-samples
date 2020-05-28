using SignalRTieredDemo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace SignalRTieredDemo.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(SignalRTieredDemoEntityFrameworkCoreDbMigrationsModule),
        typeof(SignalRTieredDemoApplicationContractsModule)
        )]
    public class SignalRTieredDemoDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
