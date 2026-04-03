using System;
using Volo.Abp.Data;
using Volo.Abp.Modularity;
using Volo.Abp.Uow;

namespace MovieCollectionApp.MongoDB;

[DependsOn(
    typeof(MovieCollectionAppApplicationTestModule),
    typeof(MovieCollectionAppMongoDbModule)
)]
public class MovieCollectionAppMongoDbTestModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpDbConnectionOptions>(options =>
        {
            options.ConnectionStrings.Default = MovieCollectionAppMongoDbFixture.GetRandomConnectionString();
        });
    }
}
