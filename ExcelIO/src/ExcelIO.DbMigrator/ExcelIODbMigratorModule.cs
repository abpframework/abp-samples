using ExcelIO.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace ExcelIO.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(ExcelIOEntityFrameworkCoreDbMigrationsModule),
        typeof(ExcelIOApplicationContractsModule)
        )]
    public class ExcelIODbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
