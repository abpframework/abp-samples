using Volo.Abp.Modularity;

namespace EShopOnAbp.IdentityService
{
    [DependsOn(
        typeof(IdentityServiceApplicationModule),
        typeof(IdentityServiceDomainTestModule)
        )]
    public class IdentityServiceApplicationTestModule : AbpModule
    {

    }
}