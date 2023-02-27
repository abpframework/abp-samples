using Volo.Abp.Modularity;

namespace OpenId2Ids;

[DependsOn(
    typeof(OpenId2IdsApplicationModule),
    typeof(OpenId2IdsDomainTestModule)
    )]
public class OpenId2IdsApplicationTestModule : AbpModule
{

}
