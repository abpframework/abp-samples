using PostgeSqlDemo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace PostgeSqlDemo.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(PostgeSqlDemoEntityFrameworkCoreDbMigrationsModule),
        typeof(PostgeSqlDemoApplicationContractsModule)
        )]
    public class PostgeSqlDemoDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
