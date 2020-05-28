using SignalRTieredDemo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace SignalRTieredDemo
{
    [DependsOn(
        typeof(SignalRTieredDemoEntityFrameworkCoreTestModule)
        )]
    public class SignalRTieredDemoDomainTestModule : AbpModule
    {

    }
}