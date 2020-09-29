using DevExtremeAngular.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace DevExtremeAngular
{
    [DependsOn(
        typeof(DevExtremeAngularEntityFrameworkCoreTestModule)
        )]
    public class DevExtremeAngularDomainTestModule : AbpModule
    {

    }
}