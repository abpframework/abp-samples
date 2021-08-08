using OpenIddictDemo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace OpenIddictDemo
{
    [DependsOn(
        typeof(OpenIddictDemoEntityFrameworkCoreTestModule)
        )]
    public class OpenIddictDemoDomainTestModule : AbpModule
    {

    }
}