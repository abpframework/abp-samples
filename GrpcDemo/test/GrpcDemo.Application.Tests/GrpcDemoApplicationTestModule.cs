using Volo.Abp.Modularity;

namespace GrpcDemo
{
    [DependsOn(
        typeof(GrpcDemoApplicationModule),
        typeof(GrpcDemoDomainTestModule)
        )]
    public class GrpcDemoApplicationTestModule : AbpModule
    {

    }
}