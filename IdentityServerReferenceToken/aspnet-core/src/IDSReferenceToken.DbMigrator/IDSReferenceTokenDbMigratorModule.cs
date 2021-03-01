using IDSReferenceToken.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace IDSReferenceToken.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(IDSReferenceTokenEntityFrameworkCoreDbMigrationsModule),
        typeof(IDSReferenceTokenApplicationContractsModule)
        )]
    public class IDSReferenceTokenDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
