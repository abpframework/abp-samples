using SignInWithoutSpecifyingTenant.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace SignInWithoutSpecifyingTenant.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(SignInWithoutSpecifyingTenantEntityFrameworkCoreDbMigrationsModule),
        typeof(SignInWithoutSpecifyingTenantApplicationContractsModule)
        )]
    public class SignInWithoutSpecifyingTenantDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
