using Volo.Abp.Modularity;

namespace OpenIddictDemo
{
    [DependsOn(
        typeof(OpenIddictDemoApplicationModule),
        typeof(OpenIddictDemoDomainTestModule)
        )]
    public class OpenIddictDemoApplicationTestModule : AbpModule
    {

    }
}