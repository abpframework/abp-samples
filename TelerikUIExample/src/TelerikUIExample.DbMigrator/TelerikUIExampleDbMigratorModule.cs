using TelerikUIExample.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace TelerikUIExample.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(TelerikUIExampleEntityFrameworkCoreModule),
    typeof(TelerikUIExampleApplicationContractsModule)
    )]
public class TelerikUIExampleDbMigratorModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
    }
}
