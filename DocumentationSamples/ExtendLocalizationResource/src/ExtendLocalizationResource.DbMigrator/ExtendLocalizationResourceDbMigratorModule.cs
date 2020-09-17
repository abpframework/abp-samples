using ExtendLocalizationResource.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace ExtendLocalizationResource.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(ExtendLocalizationResourceEntityFrameworkCoreDbMigrationsModule),
        typeof(ExtendLocalizationResourceApplicationContractsModule)
        )]
    public class ExtendLocalizationResourceDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
