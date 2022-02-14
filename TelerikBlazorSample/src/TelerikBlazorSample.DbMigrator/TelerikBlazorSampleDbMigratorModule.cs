using TelerikBlazorSample.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace TelerikBlazorSample.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(TelerikBlazorSampleEntityFrameworkCoreModule),
    typeof(TelerikBlazorSampleApplicationContractsModule)
    )]
public class TelerikBlazorSampleDbMigratorModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
    }
}
