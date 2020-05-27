using GrpcDemo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace GrpcDemo.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(GrpcDemoEntityFrameworkCoreDbMigrationsModule),
        typeof(GrpcDemoApplicationContractsModule)
        )]
    public class GrpcDemoDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
