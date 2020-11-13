using AngularMaterialUIDemo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace AngularMaterialUIDemo.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(AngularMaterialUIDemoEntityFrameworkCoreDbMigrationsModule),
        typeof(AngularMaterialUIDemoApplicationContractsModule)
        )]
    public class AngularMaterialUIDemoDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
