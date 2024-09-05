using Acme.DemoCenterApp.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace Acme.DemoCenterApp.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(DemoCenterAppEntityFrameworkCoreModule),
    typeof(DemoCenterAppApplicationContractsModule)
)]
public class DemoCenterAppDbMigratorModule : AbpModule
{
}
