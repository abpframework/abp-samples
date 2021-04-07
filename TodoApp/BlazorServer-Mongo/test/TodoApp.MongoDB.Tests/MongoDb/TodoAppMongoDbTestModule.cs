using System;
using Volo.Abp.Data;
using Volo.Abp.Modularity;

namespace TodoApp.MongoDB
{
    [DependsOn(
        typeof(TodoAppTestBaseModule),
        typeof(TodoAppMongoDbModule)
        )]
    public class TodoAppMongoDbTestModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var stringArray = TodoAppMongoDbFixture.ConnectionString.Split('?');
                        var connectionString = stringArray[0].EnsureEndsWith('/')  +
                                                   "Db_" +
                                               Guid.NewGuid().ToString("N") + "/?" + stringArray[1];

            Configure<AbpDbConnectionOptions>(options =>
            {
                options.ConnectionStrings.Default = connectionString;
            });
        }
    }
}
