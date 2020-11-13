using Volo.Abp.Modularity;

namespace AngularMaterialUIDemo
{
    [DependsOn(
        typeof(AngularMaterialUIDemoApplicationModule),
        typeof(AngularMaterialUIDemoDomainTestModule)
        )]
    public class AngularMaterialUIDemoApplicationTestModule : AbpModule
    {

    }
}