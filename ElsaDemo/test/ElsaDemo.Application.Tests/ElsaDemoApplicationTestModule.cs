using Volo.Abp.Modularity;

namespace ElsaDemo
{
    [DependsOn(
        typeof(ElsaDemoApplicationModule),
        typeof(ElsaDemoDomainTestModule)
        )]
    public class ElsaDemoApplicationTestModule : AbpModule
    {

    }
}