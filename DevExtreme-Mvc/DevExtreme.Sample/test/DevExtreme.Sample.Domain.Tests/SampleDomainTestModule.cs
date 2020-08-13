using DevExtreme.Sample.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace DevExtreme.Sample
{
    [DependsOn(
        typeof(SampleEntityFrameworkCoreTestModule)
        )]
    public class SampleDomainTestModule : AbpModule
    {

    }
}