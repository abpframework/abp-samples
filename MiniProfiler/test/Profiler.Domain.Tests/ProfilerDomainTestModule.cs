using Profiler.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Profiler
{
    [DependsOn(
        typeof(ProfilerEntityFrameworkCoreTestModule)
        )]
    public class ProfilerDomainTestModule : AbpModule
    {

    }
}