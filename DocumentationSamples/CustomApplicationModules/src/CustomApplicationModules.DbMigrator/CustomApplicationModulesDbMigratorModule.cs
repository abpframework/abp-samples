using CustomApplicationModules.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace CustomApplicationModules.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(CustomApplicationModulesEntityFrameworkCoreDbMigrationsModule),
        typeof(CustomApplicationModulesApplicationContractsModule)
        )]
    public class CustomApplicationModulesDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
