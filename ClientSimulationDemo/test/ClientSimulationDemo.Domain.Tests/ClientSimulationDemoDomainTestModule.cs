using ClientSimulationDemo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace ClientSimulationDemo
{
    [DependsOn(
        typeof(ClientSimulationDemoEntityFrameworkCoreTestModule)
        )]
    public class ClientSimulationDemoDomainTestModule : AbpModule
    {

    }
}