using DevExtremeSample.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace DevExtremeSample.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(DevExtremeSampleEntityFrameworkCoreDbMigrationsModule),
        typeof(DevExtremeSampleApplicationContractsModule)
        )]
    public class DevExtremeSampleDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
