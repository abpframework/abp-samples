using UnifiedContextsDemo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace UnifiedContextsDemo.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(UnifiedContextsDemoEntityFrameworkCoreModule),
        typeof(UnifiedContextsDemoApplicationContractsModule)
        )]
    public class UnifiedContextsDemoDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
