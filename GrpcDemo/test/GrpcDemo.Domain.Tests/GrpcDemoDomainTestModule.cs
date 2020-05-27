using GrpcDemo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace GrpcDemo
{
    [DependsOn(
        typeof(GrpcDemoEntityFrameworkCoreTestModule)
        )]
    public class GrpcDemoDomainTestModule : AbpModule
    {

    }
}