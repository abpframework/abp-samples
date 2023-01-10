using System;
using Volo.Abp.Data;
using Volo.Abp.Modularity;

namespace Acme.BookStore.MongoDB;

[DependsOn(
    typeof(BookStoreTestBaseModule),
    typeof(BookStoreMongoDbModule)
    )]
public class BookStoreMongoDbTestModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        var stringArray = BookStoreMongoDbFixture.ConnectionString.Split('?');
        var connectionString = stringArray[0].EnsureEndsWith('/') +
                                   "Db_" +
                               Guid.NewGuid().ToString("N") + "/?" + stringArray[1];

        Configure<AbpDbConnectionOptions>(options =>
        {
            options.ConnectionStrings.Default = connectionString;
        });
    }
}
