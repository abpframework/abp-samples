using Volo.Abp.Modularity;

namespace EfCoreGuardedTypeDemo;

[DependsOn(
    typeof(EfCoreGuardedTypeDemoApplicationModule),
    typeof(EfCoreGuardedTypeDemoDomainTestModule)
    )]
public class EfCoreGuardedTypeDemoApplicationTestModule : AbpModule
{

}
