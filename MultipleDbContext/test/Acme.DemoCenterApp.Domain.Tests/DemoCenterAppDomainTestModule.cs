using Volo.Abp.Modularity;

namespace Acme.DemoCenterApp;

[DependsOn(
    typeof(DemoCenterAppDomainModule),
    typeof(DemoCenterAppTestBaseModule)
)]
public class DemoCenterAppDomainTestModule : AbpModule
{

}
