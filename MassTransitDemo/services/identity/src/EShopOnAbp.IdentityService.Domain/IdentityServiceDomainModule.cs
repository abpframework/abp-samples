using Volo.Abp.Identity;
using Volo.Abp.IdentityServer;
using Volo.Abp.Modularity;

namespace EShopOnAbp.IdentityService
{
    [DependsOn(
        typeof(IdentityServiceDomainSharedModule),
        typeof(AbpIdentityDomainModule),
        typeof(AbpIdentityServerDomainModule)
    )]
    public class IdentityServiceDomainModule : AbpModule
    {
    }
}