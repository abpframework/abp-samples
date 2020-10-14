using System;
using Volo.Abp.Data;
using Volo.Abp.Uow;
using Volo.Abp.Modularity;

namespace Acme.BookStore.MongoDB
{
    [DependsOn(
        typeof(BookStoreTestBaseModule),
        typeof(BookStoreMongoDbModule)
        )]
    public class BookStoreMongoDbTestModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var connectionString = BookStoreMongoDbFixture.ConnectionString.EnsureEndsWith('/') +
                                   "Db_" +
                                   Guid.NewGuid().ToString("N");

            Configure<AbpDbConnectionOptions>(options =>
            {
                options.ConnectionStrings.Default = connectionString;
            });

            Configure<AbpUnitOfWorkDefaultOptions>(options =>
            {
                options.TransactionBehavior = UnitOfWorkTransactionBehavior.Disabled;
            });
        }
    }
}
