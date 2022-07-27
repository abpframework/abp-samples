using Ids2OpenId.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace Ids2OpenId.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(Ids2OpenIdEntityFrameworkCoreModule),
    typeof(Ids2OpenIdApplicationContractsModule)
    )]
public class Ids2OpenIdDbMigratorModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
    }
}
