using Volo.Abp.Modularity;

namespace Ids2OpenId;

[DependsOn(
    typeof(Ids2OpenIdApplicationModule),
    typeof(Ids2OpenIdDomainTestModule)
    )]
public class Ids2OpenIdApplicationTestModule : AbpModule
{

}
