using Profiler.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace Profiler.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(ProfilerEntityFrameworkCoreModule),
        typeof(ProfilerApplicationContractsModule)
        )]
    public class ProfilerDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
