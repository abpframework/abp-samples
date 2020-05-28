using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace SignalRTieredDemo.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(SignalRTieredDemoHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class SignalRTieredDemoConsoleApiClientModule : AbpModule
    {
        
    }
}
