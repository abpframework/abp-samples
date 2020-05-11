using Volo.Abp.Modularity;

namespace SignalRDemo
{
    [DependsOn(
        typeof(SignalRDemoApplicationModule),
        typeof(SignalRDemoDomainTestModule)
        )]
    public class SignalRDemoApplicationTestModule : AbpModule
    {

    }
}