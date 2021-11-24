using ProfilerTiered.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace ProfilerTiered
{
    [DependsOn(
        typeof(ProfilerTieredEntityFrameworkCoreTestModule)
        )]
    public class ProfilerTieredDomainTestModule : AbpModule
    {

    }
}