using DevExpressSample.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace DevExpressSample
{
    [DependsOn(
        typeof(DevExpressSampleEntityFrameworkCoreTestModule)
        )]
    public class DevExpressSampleDomainTestModule : AbpModule
    {

    }
}