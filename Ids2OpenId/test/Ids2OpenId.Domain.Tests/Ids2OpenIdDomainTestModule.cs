using Ids2OpenId.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Ids2OpenId;

[DependsOn(
    typeof(Ids2OpenIdEntityFrameworkCoreTestModule)
    )]
public class Ids2OpenIdDomainTestModule : AbpModule
{

}
