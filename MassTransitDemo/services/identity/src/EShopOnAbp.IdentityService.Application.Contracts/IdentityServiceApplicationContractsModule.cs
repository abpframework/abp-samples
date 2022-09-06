using Volo.Abp.Identity;
using Volo.Abp.Modularity;

namespace EShopOnAbp.IdentityService
{
    [DependsOn(
        typeof(IdentityServiceDomainSharedModule),
        typeof(AbpIdentityApplicationContractsModule)
    )]
    public class IdentityServiceApplicationContractsModule : AbpModule
    {
    }
}
