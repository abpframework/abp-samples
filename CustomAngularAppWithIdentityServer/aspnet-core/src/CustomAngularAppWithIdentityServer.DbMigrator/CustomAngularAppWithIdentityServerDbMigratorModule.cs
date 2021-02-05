using CustomAngularAppWithIdentityServer.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace CustomAngularAppWithIdentityServer.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(CustomAngularAppWithIdentityServerEntityFrameworkCoreDbMigrationsModule),
        typeof(CustomAngularAppWithIdentityServerApplicationContractsModule)
        )]
    public class CustomAngularAppWithIdentityServerDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
