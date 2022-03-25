using KeycloakDemo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace KeycloakDemo.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(KeycloakDemoEntityFrameworkCoreModule),
    typeof(KeycloakDemoApplicationContractsModule)
    )]
public class KeycloakDemoDbMigratorModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
    }
}
