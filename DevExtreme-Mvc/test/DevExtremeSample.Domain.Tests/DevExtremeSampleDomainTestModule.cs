using DevExtremeSample.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace DevExtremeSample
{
    [DependsOn(
        typeof(DevExtremeSampleEntityFrameworkCoreTestModule)
        )]
    public class DevExtremeSampleDomainTestModule : AbpModule
    {

    }
}