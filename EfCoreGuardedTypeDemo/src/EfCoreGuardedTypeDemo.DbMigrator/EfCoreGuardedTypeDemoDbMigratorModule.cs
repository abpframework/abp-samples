using EfCoreGuardedTypeDemo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace EfCoreGuardedTypeDemo.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(EfCoreGuardedTypeDemoEntityFrameworkCoreModule),
    typeof(EfCoreGuardedTypeDemoApplicationContractsModule)
    )]
public class EfCoreGuardedTypeDemoDbMigratorModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
    }
}
