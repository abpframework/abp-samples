using StoredProcedureDemo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace StoredProcedureDemo.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(StoredProcedureDemoEntityFrameworkCoreDbMigrationsModule),
        typeof(StoredProcedureDemoApplicationContractsModule)
        )]
    public class StoredProcedureDemoDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
