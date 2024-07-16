using BookStore.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace BookStore.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(BookStoreEntityFrameworkCoreModule),
    typeof(BookStoreApplicationContractsModule)
    )]
public class BookStoreDbMigratorModule : AbpModule
{
}
