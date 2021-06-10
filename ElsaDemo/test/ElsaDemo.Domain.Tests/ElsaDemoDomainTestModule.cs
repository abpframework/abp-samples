using ElsaDemo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace ElsaDemo
{
    [DependsOn(
        typeof(ElsaDemoEntityFrameworkCoreTestModule)
        )]
    public class ElsaDemoDomainTestModule : AbpModule
    {

    }
}