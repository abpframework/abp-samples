using TodoApp.MongoDB;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace TodoApp.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(TodoAppMongoDbModule),
        typeof(TodoAppApplicationContractsModule)
        )]
    public class TodoAppDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
