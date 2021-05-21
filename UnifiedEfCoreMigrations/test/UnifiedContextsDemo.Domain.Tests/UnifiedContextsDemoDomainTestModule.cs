using UnifiedContextsDemo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace UnifiedContextsDemo
{
    [DependsOn(
        typeof(UnifiedContextsDemoEntityFrameworkCoreTestModule)
        )]
    public class UnifiedContextsDemoDomainTestModule : AbpModule
    {

    }
}