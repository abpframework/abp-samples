using System;
using Volo.Abp.Data;
using Volo.Abp.Modularity;

namespace SignalRDemoBlazorUi.MongoDB;

[DependsOn(
    typeof(SignalRDemoBlazorUiApplicationTestModule),
    typeof(SignalRDemoBlazorUiMongoDbModule)
)]
public class SignalRDemoBlazorUiMongoDbTestModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpDbConnectionOptions>(options =>
        {
            options.ConnectionStrings.Default = SignalRDemoBlazorUiMongoDbFixture.GetRandomConnectionString();
        });
    }
}
