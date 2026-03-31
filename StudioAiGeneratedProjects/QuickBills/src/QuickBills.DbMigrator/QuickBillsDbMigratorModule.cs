using QuickBills.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace QuickBills.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(QuickBillsEntityFrameworkCoreModule),
    typeof(QuickBillsApplicationContractsModule)
)]
public class QuickBillsDbMigratorModule : AbpModule
{
}
