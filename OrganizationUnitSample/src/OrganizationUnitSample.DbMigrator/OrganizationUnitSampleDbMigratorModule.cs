using OrganizationUnitSample.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace OrganizationUnitSample.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(OrganizationUnitSampleEntityFrameworkCoreDbMigrationsModule),
        typeof(OrganizationUnitSampleApplicationContractsModule)
        )]
    public class OrganizationUnitSampleDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
