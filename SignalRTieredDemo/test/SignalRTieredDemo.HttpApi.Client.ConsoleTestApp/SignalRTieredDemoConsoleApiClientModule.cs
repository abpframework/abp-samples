using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;
using Volo.Abp.Autofac;

namespace SignalRTieredDemo.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(SignalRTieredDemoHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class SignalRTieredDemoConsoleApiClientModule : AbpModule
    {
        
    }
}
