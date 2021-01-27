using CustomNgAppWithIdentityServer.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace CustomNgAppWithIdentityServer.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(CustomNgAppWithIdentityServerEntityFrameworkCoreDbMigrationsModule),
        typeof(CustomNgAppWithIdentityServerApplicationContractsModule)
    )]
    public class CustomNgAppWithIdentityServerDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options =>
            {
                options.IsJobExecutionEnabled = false;
            });
        }
    }
}