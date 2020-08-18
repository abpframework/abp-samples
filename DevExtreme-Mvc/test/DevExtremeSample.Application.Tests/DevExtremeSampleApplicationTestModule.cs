using Volo.Abp.Modularity;

namespace DevExtremeSample
{
    [DependsOn(
        typeof(DevExtremeSampleApplicationModule),
        typeof(DevExtremeSampleDomainTestModule)
        )]
    public class DevExtremeSampleApplicationTestModule : AbpModule
    {

    }
}