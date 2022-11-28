using EfCoreJSONColumnDemo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace EfCoreJSONColumnDemo.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(EfCoreJSONColumnDemoEntityFrameworkCoreModule),
    typeof(EfCoreJSONColumnDemoApplicationContractsModule)
    )]
public class EfCoreJSONColumnDemoDbMigratorModule : AbpModule
{

}
