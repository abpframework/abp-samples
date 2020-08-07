using PasswordlessAuthentication.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace PasswordlessAuthentication.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(PasswordlessAuthenticationEntityFrameworkCoreDbMigrationsModule),
        typeof(PasswordlessAuthenticationApplicationContractsModule)
        )]
    public class PasswordlessAuthenticationDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
