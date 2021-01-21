using Volo.Abp.Modularity;

namespace AbpPrimengSample
{
    [DependsOn(
        typeof(AbpPrimengSampleApplicationModule),
        typeof(AbpPrimengSampleDomainTestModule)
        )]
    public class AbpPrimengSampleApplicationTestModule : AbpModule
    {

    }
}