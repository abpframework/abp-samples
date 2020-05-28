using Volo.Abp.Modularity;

namespace SignalRTieredDemo
{
    [DependsOn(
        typeof(SignalRTieredDemoApplicationModule),
        typeof(SignalRTieredDemoDomainTestModule)
        )]
    public class SignalRTieredDemoApplicationTestModule : AbpModule
    {

    }
}