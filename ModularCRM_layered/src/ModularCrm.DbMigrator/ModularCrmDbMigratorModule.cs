using ModularCrm.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace ModularCrm.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(ModularCrmEntityFrameworkCoreModule),
    typeof(ModularCrmApplicationContractsModule)
)]
public class ModularCrmDbMigratorModule : AbpModule
{
}
