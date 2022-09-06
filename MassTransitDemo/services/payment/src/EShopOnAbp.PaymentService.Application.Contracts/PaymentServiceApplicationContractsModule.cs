using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace EShopOnAbp.PaymentService
{
    [DependsOn(
        typeof(PaymentServiceDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    public class PaymentServiceApplicationContractsModule : AbpModule
    {

    }
}
