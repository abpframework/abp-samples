using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace EShopOnAbp.PaymentService
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(PaymentServiceDomainSharedModule)
    )]
    public class PaymentServiceDomainModule : AbpModule
    {

    }
}
