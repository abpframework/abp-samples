using EShopOnAbp.OrderingService.Orders;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace EShopOnAbp.OrderingService.EntityFrameworkCore
{
    [ConnectionStringName(OrderingServiceDbProperties.ConnectionStringName)]
    public interface IOrderingServiceDbContext : IEfCoreDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * DbSet<Question> Questions { get; }
         */
        DbSet<Order> Orders { get; }
    }
}