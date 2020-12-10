using Volo.Abp.Modularity;

namespace DevExpressSample
{
    [DependsOn(
        typeof(DevExpressSampleApplicationModule),
        typeof(DevExpressSampleDomainTestModule)
        )]
    public class DevExpressSampleApplicationTestModule : AbpModule
    {

    }
}