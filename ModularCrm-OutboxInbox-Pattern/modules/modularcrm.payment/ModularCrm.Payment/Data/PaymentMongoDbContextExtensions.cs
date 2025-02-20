using ModularCrm.Payment.Entities;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace ModularCrm.Payment.Data;

public static class PaymentMongoDbContextExtensions
{
    public static void ConfigurePayment(
        this IMongoModelBuilder builder)
    {
        Check.NotNull(builder, nameof(builder));

        builder.Entity<PaymentRecord>(b =>
        {
            b.CollectionName = PaymentDbProperties.DbTablePrefix + "PaymentRecords";
        });
    }
}
