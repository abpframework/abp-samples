using EfCoreGuardedTypeDemo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace EfCoreGuardedTypeDemo;

[DependsOn(
    typeof(EfCoreGuardedTypeDemoEntityFrameworkCoreTestModule)
    )]
public class EfCoreGuardedTypeDemoDomainTestModule : AbpModule
{

}
