using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace SignalRDemo.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(SignalRDemoHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class SignalRDemoConsoleApiClientModule : AbpModule
    {
        
    }
}
