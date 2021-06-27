using BookStore.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace BookStore.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(BookStoreEntityFrameworkCoreDbMigrationsModule),
        typeof(BookStoreApplicationContractsModule)
        )]
    public class BookStoreDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
