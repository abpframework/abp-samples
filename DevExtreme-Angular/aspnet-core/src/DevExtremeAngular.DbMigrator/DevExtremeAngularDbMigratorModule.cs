using DevExtremeAngular.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace DevExtremeAngular.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(DevExtremeAngularEntityFrameworkCoreDbMigrationsModule),
        typeof(DevExtremeAngularApplicationContractsModule)
        )]
    public class DevExtremeAngularDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
