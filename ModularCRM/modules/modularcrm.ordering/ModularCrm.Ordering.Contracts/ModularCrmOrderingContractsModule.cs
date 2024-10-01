using Volo.Abp.Application;
using Volo.Abp.Modularity;

namespace ModularCrm.Ordering.Contracts;

[DependsOn(
    typeof(AbpDddApplicationContractsModule)
)]
public class ModularCrmOrderingContractsModule : AbpModule
{

}