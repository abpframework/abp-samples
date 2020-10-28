using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace ClientSimulationDemo.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(ClientSimulationDemoHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class ClientSimulationDemoConsoleApiClientModule : AbpModule
    {
        
    }
}
