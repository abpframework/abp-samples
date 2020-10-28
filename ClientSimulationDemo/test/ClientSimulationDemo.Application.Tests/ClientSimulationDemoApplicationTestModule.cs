using Volo.Abp.Modularity;

namespace ClientSimulationDemo
{
    [DependsOn(
        typeof(ClientSimulationDemoApplicationModule),
        typeof(ClientSimulationDemoDomainTestModule)
        )]
    public class ClientSimulationDemoApplicationTestModule : AbpModule
    {

    }
}