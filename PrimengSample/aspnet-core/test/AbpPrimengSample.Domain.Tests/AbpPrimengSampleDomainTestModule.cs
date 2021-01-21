using AbpPrimengSample.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace AbpPrimengSample
{
    [DependsOn(
        typeof(AbpPrimengSampleEntityFrameworkCoreTestModule)
        )]
    public class AbpPrimengSampleDomainTestModule : AbpModule
    {

    }
}