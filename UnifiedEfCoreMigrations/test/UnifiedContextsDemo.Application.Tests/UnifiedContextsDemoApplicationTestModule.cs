using Volo.Abp.Modularity;

namespace UnifiedContextsDemo
{
    [DependsOn(
        typeof(UnifiedContextsDemoApplicationModule),
        typeof(UnifiedContextsDemoDomainTestModule)
        )]
    public class UnifiedContextsDemoApplicationTestModule : AbpModule
    {

    }
}