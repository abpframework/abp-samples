using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;
using Volo.Abp.Autofac;

namespace ClientSimulationDemo.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(ClientSimulationDemoHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class ClientSimulationDemoConsoleApiClientModule : AbpModule
    {
        
    }
}
