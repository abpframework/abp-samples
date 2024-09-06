using Volo.Abp.Modularity;

namespace Acme.DemoCenterApp;

[DependsOn(
    typeof(DemoCenterAppApplicationModule),
    typeof(DemoCenterAppDomainTestModule)
)]
public class DemoCenterAppApplicationTestModule : AbpModule
{

}
