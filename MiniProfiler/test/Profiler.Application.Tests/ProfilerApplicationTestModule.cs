using Volo.Abp.Modularity;

namespace Profiler
{
    [DependsOn(
        typeof(ProfilerApplicationModule),
        typeof(ProfilerDomainTestModule)
        )]
    public class ProfilerApplicationTestModule : AbpModule
    {

    }
}