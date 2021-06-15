using ConcurrencyDemo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace ConcurrencyDemo
{
    [DependsOn(
        typeof(ConcurrencyDemoEntityFrameworkCoreTestModule)
        )]
    public class ConcurrencyDemoDomainTestModule : AbpModule
    {

    }
}