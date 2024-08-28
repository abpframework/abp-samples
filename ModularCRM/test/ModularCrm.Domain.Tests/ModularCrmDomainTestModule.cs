using Volo.Abp.Modularity;

namespace ModularCrm;

[DependsOn(
    typeof(ModularCrmDomainModule),
    typeof(ModularCrmTestBaseModule)
)]
public class ModularCrmDomainTestModule : AbpModule
{

}
