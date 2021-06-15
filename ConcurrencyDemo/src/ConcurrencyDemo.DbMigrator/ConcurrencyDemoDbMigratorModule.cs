using ConcurrencyDemo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace ConcurrencyDemo.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(ConcurrencyDemoEntityFrameworkCoreDbMigrationsModule),
        typeof(ConcurrencyDemoApplicationContractsModule)
        )]
    public class ConcurrencyDemoDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
