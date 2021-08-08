using OpenIddictDemo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace OpenIddictDemo.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(OpenIddictDemoEntityFrameworkCoreModule),
        typeof(OpenIddictDemoApplicationContractsModule)
        )]
    public class OpenIddictDemoDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
