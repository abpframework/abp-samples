using Volo.Abp.Modularity;

namespace MatBlazorSample
{
    [DependsOn(
        typeof(MatBlazorSampleApplicationModule),
        typeof(MatBlazorSampleDomainTestModule)
        )]
    public class MatBlazorSampleApplicationTestModule : AbpModule
    {

    }
}