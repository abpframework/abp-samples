using System;
using Volo.Abp.Data;
using Volo.Abp.Modularity;

namespace InterceptionSampleMongoApp.MongoDB;

[DependsOn(
    typeof(InterceptionSampleMongoAppTestBaseModule),
    typeof(InterceptionSampleMongoAppMongoDbModule)
    )]
public class InterceptionSampleMongoAppMongoDbTestModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpDbConnectionOptions>(options =>
        {
            options.ConnectionStrings.Default = InterceptionSampleMongoAppMongoDbFixture.GetRandomConnectionString();
        });
    }
}
