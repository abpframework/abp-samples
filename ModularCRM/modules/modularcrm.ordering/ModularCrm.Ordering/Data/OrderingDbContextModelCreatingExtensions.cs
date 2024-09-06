using Microsoft.EntityFrameworkCore;
using ModularCrm.Ordering.Entities;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace ModularCrm.Ordering.Data
{
    public static class OrderingDbContextModelCreatingExtensions
    {
        public static void ConfigureOrdering(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            builder.Entity<Order>(b =>
            {
                //Configure table name
                b.ToTable("Orders");

                //Always call this method to setup base entity properties
                b.ConfigureByConvention();

                //Properties of the entity
                b.Property(q => q.CustomerName).IsRequired().HasMaxLength(120);
            });
        }
    }
}
