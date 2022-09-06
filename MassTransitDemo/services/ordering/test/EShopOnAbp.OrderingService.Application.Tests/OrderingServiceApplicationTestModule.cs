using Volo.Abp.Modularity;

namespace EShopOnAbp.OrderingService
{
    [DependsOn(
        typeof(OrderingServiceApplicationModule),
        typeof(OrderingServiceDomainTestModule)
        )]
    public class OrderingServiceApplicationTestModule : AbpModule
    {

    }
}
