using Acme.BookStore.AngularMaterial.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace Acme.BookStore.AngularMaterial.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(AngularMaterialEntityFrameworkCoreDbMigrationsModule),
        typeof(AngularMaterialApplicationContractsModule)
        )]
    public class AngularMaterialDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
