using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace Acme.ModuleA;

[DependsOn(
    typeof(AbpDddDomainModule),
    typeof(ModuleADomainSharedModule)
)]
public class ModuleADomainModule : AbpModule
{

}
