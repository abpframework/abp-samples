using Volo.Abp.Modularity;

namespace AspirationalAbp;

[DependsOn(
    typeof(AspirationalAbpDomainModule),
    typeof(AspirationalAbpTestBaseModule)
)]
public class AspirationalAbpDomainTestModule : AbpModule
{

}
