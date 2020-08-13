using Volo.Abp.Modularity;

namespace DevExtreme.Sample
{
    [DependsOn(
        typeof(SampleApplicationModule),
        typeof(SampleDomainTestModule)
        )]
    public class SampleApplicationTestModule : AbpModule
    {

    }
}