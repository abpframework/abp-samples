using EShopOnAbp.OrderingService.Orders;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace EShopOnAbp.OrderingService.EntityFrameworkCore;

[ConnectionStringName(OrderingServiceDbProperties.ConnectionStringName)]
public class OrderingServiceDbContext : AbpDbContext<OrderingServiceDbContext>, IOrderingServiceDbContext
{
    public virtual DbSet<Order> Orders { get; set; }

    public OrderingServiceDbContext(DbContextOptions<OrderingServiceDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        /* Include modules to your migration db context */

        modelBuilder.ConfigureOrderingService();
        /* Configure your own tables/entities inside here */


        modelBuilder.Entity<Order>(b =>
        {
            b.ToTable(OrderingServiceDbProperties.DbTablePrefix + "Orders", OrderingServiceDbProperties.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props

            b.Property(q => q.PaymentStatus).HasMaxLength(OrderConstants.PaymentStatusMaxLength);
            b.Property(q => q.PaymentMethod).HasMaxLength(OrderConstants.OrderPaymentMethodNameMaxLength).IsRequired();

            b.OwnsOne(o => o.Address, a => { a.WithOwner(); });
            b.OwnsOne(o => o.Buyer, a => { a.WithOwner(); });

            b.Navigation(q => q.OrderItems).UsePropertyAccessMode(PropertyAccessMode.Property);

            b.Property(q => q.OrderStatus).HasConversion(new EnumToStringConverter<OrderStatus>());
        });

        modelBuilder.Entity<OrderItem>(b =>
        {
            b.ToTable(OrderingServiceDbProperties.DbTablePrefix + "OrderItems",
                OrderingServiceDbProperties.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props

            b.Property<Guid>("OrderId").IsRequired();
            b.Property(q => q.ProductId).IsRequired();
            b.Property(q => q.ProductCode).IsRequired();
            b.Property(q => q.ProductName).IsRequired();
            b.Property(q => q.Discount).IsRequired();
            b.Property(q => q.UnitPrice).IsRequired();
            b.Property(q => q.Units).IsRequired();
            b.Property(q => q.PictureUrl).IsRequired(false);
        });
    }
}
