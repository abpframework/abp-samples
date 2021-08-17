using FileActionsDemo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace FileActionsDemo.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(FileActionsDemoEntityFrameworkCoreModule),
        typeof(FileActionsDemoApplicationContractsModule)
        )]
    public class FileActionsDemoDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
