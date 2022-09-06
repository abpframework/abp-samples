using EShopOnAbp.PaymentService.PaymentRequests;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace EShopOnAbp.PaymentService.EntityFrameworkCore
{
    [ConnectionStringName(PaymentServiceDbProperties.ConnectionStringName)]
    public interface IPaymentServiceDbContext : IEfCoreDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * DbSet<Question> Questions { get; }
         */

        DbSet<PaymentRequest> PaymentRequests { get; set; }
    }
}