using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace EShopOnAbp.OrderingService
{
    [DependsOn(
        typeof(OrderingServiceDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    public class OrderingServiceApplicationContractsModule : AbpModule
    {

    }
}
