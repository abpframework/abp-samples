using Volo.Abp.Modularity;

namespace ConcurrencyDemo
{
    [DependsOn(
        typeof(ConcurrencyDemoApplicationModule),
        typeof(ConcurrencyDemoDomainTestModule)
        )]
    public class ConcurrencyDemoApplicationTestModule : AbpModule
    {

    }
}