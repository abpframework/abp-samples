using MatBlazorSample.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace MatBlazorSample
{
    [DependsOn(
        typeof(MatBlazorSampleEntityFrameworkCoreTestModule)
        )]
    public class MatBlazorSampleDomainTestModule : AbpModule
    {

    }
}