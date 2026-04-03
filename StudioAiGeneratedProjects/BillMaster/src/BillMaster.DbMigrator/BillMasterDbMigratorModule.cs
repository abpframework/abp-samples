using BillMaster.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace BillMaster.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(BillMasterEntityFrameworkCoreModule),
    typeof(BillMasterApplicationContractsModule)
)]
public class BillMasterDbMigratorModule : AbpModule
{
}
