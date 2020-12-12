using DevExpressSample.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace DevExpressSample.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(DevExpressSampleEntityFrameworkCoreDbMigrationsModule),
        typeof(DevExpressSampleApplicationContractsModule)
        )]
    public class DevExpressSampleDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
