using EShopOnAbp.IdentityService.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace EShopOnAbp.IdentityService
{
    [DependsOn(
        typeof(IdentityServiceEntityFrameworkCoreTestModule)
        )]
    public class IdentityServiceDomainTestModule : AbpModule
    {

    }
}