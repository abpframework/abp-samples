using Volo.Abp.Modularity;

namespace EShopOnAbp.PaymentService
{
    [DependsOn(
        typeof(PaymentServiceApplicationModule),
        typeof(PaymentServiceDomainTestModule)
        )]
    public class PaymentServiceApplicationTestModule : AbpModule
    {

    }
}
