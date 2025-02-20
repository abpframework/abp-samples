using ModularCrm.Ordering.Entities;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace ModularCrm.Ordering.Data;

public static class OrderingDbContextModelCreatingExtensions
{
    public static void ConfigureOrdering(this IMongoModelBuilder builder)
    {
        Check.NotNull(builder, nameof(builder));

        builder.Entity<Order>(b =>
        {
            b.CollectionName = OrderingDbProperties.DbTablePrefix + "Orders";
        });
    }
}
