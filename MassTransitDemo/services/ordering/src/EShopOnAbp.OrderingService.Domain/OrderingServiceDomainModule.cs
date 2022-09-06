using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace EShopOnAbp.OrderingService
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(OrderingServiceDomainSharedModule)
    )]
    public class OrderingServiceDomainModule : AbpModule
    {

    }
}
