using ElsaDemo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace ElsaDemo.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(ElsaDemoEntityFrameworkCoreDbMigrationsModule),
        typeof(ElsaDemoApplicationContractsModule)
        )]
    public class ElsaDemoDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
