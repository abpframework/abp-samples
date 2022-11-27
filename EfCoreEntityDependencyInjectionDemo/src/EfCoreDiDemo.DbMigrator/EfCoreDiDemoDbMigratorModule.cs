using EfCoreDiDemo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace EfCoreDiDemo.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(EfCoreDiDemoEntityFrameworkCoreModule),
    typeof(EfCoreDiDemoApplicationContractsModule)
    )]
public class EfCoreDiDemoDbMigratorModule : AbpModule
{

}
