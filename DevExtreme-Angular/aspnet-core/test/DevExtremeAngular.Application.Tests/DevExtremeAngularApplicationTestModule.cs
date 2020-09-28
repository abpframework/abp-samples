using Volo.Abp.Modularity;

namespace DevExtremeAngular
{
    [DependsOn(
        typeof(DevExtremeAngularApplicationModule),
        typeof(DevExtremeAngularDomainTestModule)
        )]
    public class DevExtremeAngularApplicationTestModule : AbpModule
    {

    }
}