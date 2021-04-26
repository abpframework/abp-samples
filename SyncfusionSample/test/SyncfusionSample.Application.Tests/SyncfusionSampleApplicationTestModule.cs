using Volo.Abp.Modularity;

namespace SyncfusionSample
{
    [DependsOn(
        typeof(SyncfusionSampleApplicationModule),
        typeof(SyncfusionSampleDomainTestModule)
        )]
    public class SyncfusionSampleApplicationTestModule : AbpModule
    {

    }
}