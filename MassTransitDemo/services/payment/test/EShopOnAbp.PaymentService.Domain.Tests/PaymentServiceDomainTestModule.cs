using EShopOnAbp.PaymentService.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace EShopOnAbp.PaymentService
{
    /* Domain tests are configured to use the EF Core provider.
     * You can switch to MongoDB, however your domain tests should be
     * database independent anyway.
     */
    [DependsOn(
        typeof(PaymentServiceEntityFrameworkCoreTestModule)
        )]
    public class PaymentServiceDomainTestModule : AbpModule
    {
        
    }
}
