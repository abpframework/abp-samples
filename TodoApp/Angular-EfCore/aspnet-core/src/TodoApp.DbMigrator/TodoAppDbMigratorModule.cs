using TodoApp.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace TodoApp.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(TodoAppEntityFrameworkCoreModule),
    typeof(TodoAppApplicationContractsModule)
    )]
public class TodoAppDbMigratorModule : AbpModule
{

}
