using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace ModularCrm.Ordering.Data;

[ConnectionStringName(OrderingDbProperties.ConnectionStringName)]
public class OrderingDbContext : AbpDbContext<OrderingDbContext>, IOrderingDbContext
{
    public DbSet<Order> Orders { get; set; }

    public OrderingDbContext(DbContextOptions<OrderingDbContext> options) : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.ConfigureOrdering();
    }
}