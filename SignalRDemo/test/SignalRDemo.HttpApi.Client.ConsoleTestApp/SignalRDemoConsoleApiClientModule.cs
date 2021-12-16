using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;
using Volo.Abp.Autofac;

namespace SignalRDemo.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(SignalRDemoHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class SignalRDemoConsoleApiClientModule : AbpModule
    {
        
    }
}
