using Volo.Abp.Modularity;

namespace AspirationalAbp;

[DependsOn(
    typeof(AspirationalAbpApplicationModule),
    typeof(AspirationalAbpDomainTestModule)
)]
public class AspirationalAbpApplicationTestModule : AbpModule
{

}
