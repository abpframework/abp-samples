using ProfilerTiered.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace ProfilerTiered.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(ProfilerTieredEntityFrameworkCoreModule),
        typeof(ProfilerTieredApplicationContractsModule)
        )]
    public class ProfilerTieredDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
