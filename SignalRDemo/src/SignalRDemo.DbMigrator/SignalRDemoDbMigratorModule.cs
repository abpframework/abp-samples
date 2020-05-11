using SignalRDemo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace SignalRDemo.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(SignalRDemoEntityFrameworkCoreDbMigrationsModule),
        typeof(SignalRDemoApplicationContractsModule)
        )]
    public class SignalRDemoDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
