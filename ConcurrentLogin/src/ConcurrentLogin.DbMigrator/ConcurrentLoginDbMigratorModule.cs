using ConcurrentLogin.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace ConcurrentLogin.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(ConcurrentLoginEntityFrameworkCoreModule),
    typeof(ConcurrentLoginApplicationContractsModule)
    )]
public class ConcurrentLoginDbMigratorModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
    }
}
