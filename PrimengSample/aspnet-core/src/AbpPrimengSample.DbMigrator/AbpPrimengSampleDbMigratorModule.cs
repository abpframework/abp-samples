using AbpPrimengSample.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace AbpPrimengSample.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(AbpPrimengSampleEntityFrameworkCoreDbMigrationsModule),
        typeof(AbpPrimengSampleApplicationContractsModule)
        )]
    public class AbpPrimengSampleDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
