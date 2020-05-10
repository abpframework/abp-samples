using PostgeSqlDemo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace PostgeSqlDemo
{
    [DependsOn(
        typeof(PostgeSqlDemoEntityFrameworkCoreTestModule)
        )]
    public class PostgeSqlDemoDomainTestModule : AbpModule
    {

    }
}