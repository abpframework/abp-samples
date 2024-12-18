using Volo.Abp.Modularity;

namespace ModularCrm;

[DependsOn(
    typeof(ModularCrmApplicationModule),
    typeof(ModularCrmDomainTestModule)
)]
public class ModularCrmApplicationTestModule : AbpModule
{

}
