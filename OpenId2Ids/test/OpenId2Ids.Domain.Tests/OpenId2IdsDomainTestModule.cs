using OpenId2Ids.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace OpenId2Ids;

[DependsOn(
    typeof(OpenId2IdsEntityFrameworkCoreTestModule)
    )]
public class OpenId2IdsDomainTestModule : AbpModule
{

}
