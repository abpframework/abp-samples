using Volo.Abp.Modularity;

namespace Acme.ModuleA;

[DependsOn(
    typeof(ModuleADomainModule),
    typeof(ModuleATestBaseModule)
)]
public class ModuleADomainTestModule : AbpModule
{

}
