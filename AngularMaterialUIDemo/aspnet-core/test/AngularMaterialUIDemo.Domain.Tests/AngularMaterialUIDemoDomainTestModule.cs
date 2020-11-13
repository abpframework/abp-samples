using AngularMaterialUIDemo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace AngularMaterialUIDemo
{
    [DependsOn(
        typeof(AngularMaterialUIDemoEntityFrameworkCoreTestModule)
        )]
    public class AngularMaterialUIDemoDomainTestModule : AbpModule
    {

    }
}