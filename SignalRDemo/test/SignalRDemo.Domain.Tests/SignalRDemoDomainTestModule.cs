using SignalRDemo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace SignalRDemo
{
    [DependsOn(
        typeof(SignalRDemoEntityFrameworkCoreTestModule)
        )]
    public class SignalRDemoDomainTestModule : AbpModule
    {

    }
}