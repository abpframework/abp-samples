using Volo.Abp.Modularity;

namespace PostgeSqlDemo
{
    [DependsOn(
        typeof(PostgeSqlDemoApplicationModule),
        typeof(PostgeSqlDemoDomainTestModule)
        )]
    public class PostgeSqlDemoApplicationTestModule : AbpModule
    {

    }
}