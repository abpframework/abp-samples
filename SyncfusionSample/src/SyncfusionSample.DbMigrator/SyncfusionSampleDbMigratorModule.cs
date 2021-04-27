using SyncfusionSample.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace SyncfusionSample.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(SyncfusionSampleEntityFrameworkCoreDbMigrationsModule),
        typeof(SyncfusionSampleApplicationContractsModule)
        )]
    public class SyncfusionSampleDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
