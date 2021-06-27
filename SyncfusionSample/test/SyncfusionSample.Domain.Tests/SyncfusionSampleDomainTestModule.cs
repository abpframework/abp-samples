using SyncfusionSample.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace SyncfusionSample
{
    [DependsOn(
        typeof(SyncfusionSampleEntityFrameworkCoreTestModule)
        )]
    public class SyncfusionSampleDomainTestModule : AbpModule
    {

    }
}