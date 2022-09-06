using Volo.Abp.Identity;
using Volo.Abp.Modularity;

namespace EShopOnAbp.IdentityService
{
    [DependsOn(
        typeof(IdentityServiceApplicationContractsModule),
        typeof(AbpIdentityHttpApiModule)
    )]
    public class IdentityServiceHttpApiModule : AbpModule
    {
    }
}