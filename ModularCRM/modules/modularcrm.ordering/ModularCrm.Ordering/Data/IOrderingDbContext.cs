using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace ModularCrm.Ordering.Data;

[ConnectionStringName(OrderingDbProperties.ConnectionStringName)]
public interface IOrderingDbContext : IEfCoreDbContext
{
    DbSet<Order> Orders { get; set; }
}