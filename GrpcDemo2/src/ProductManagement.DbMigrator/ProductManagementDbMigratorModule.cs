using ProductManagement.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace ProductManagement.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(ProductManagementEntityFrameworkCoreModule),
    typeof(ProductManagementApplicationContractsModule)
    )]
public class ProductManagementDbMigratorModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
    }
}
