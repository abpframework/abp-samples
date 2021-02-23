using MatBlazorSample.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace MatBlazorSample.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(MatBlazorSampleEntityFrameworkCoreDbMigrationsModule),
        typeof(MatBlazorSampleApplicationContractsModule)
        )]
    public class MatBlazorSampleDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
