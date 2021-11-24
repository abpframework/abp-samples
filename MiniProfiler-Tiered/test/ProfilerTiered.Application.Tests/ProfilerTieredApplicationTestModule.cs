using Volo.Abp.Modularity;

namespace ProfilerTiered
{
    [DependsOn(
        typeof(ProfilerTieredApplicationModule),
        typeof(ProfilerTieredDomainTestModule)
        )]
    public class ProfilerTieredApplicationTestModule : AbpModule
    {

    }
}