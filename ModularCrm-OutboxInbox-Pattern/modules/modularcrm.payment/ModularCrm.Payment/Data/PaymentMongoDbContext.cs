using ModularCrm.Payment.Entities;
using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;
using Volo.Abp.MongoDB.DistributedEvents;

namespace ModularCrm.Payment.Data;

[ConnectionStringName(PaymentDbProperties.ConnectionStringName)]
public class PaymentMongoDbContext : AbpMongoDbContext, IPaymentMongoDbContext
{
    public IMongoCollection<IncomingEventRecord> IncomingEvents => Collection<IncomingEventRecord>();
    public IMongoCollection<OutgoingEventRecord> OutgoingEvents => Collection<OutgoingEventRecord>();
    public IMongoCollection<PaymentRecord> PaymentRecords => Collection<PaymentRecord>();

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.ConfigureEventInbox();
        modelBuilder.ConfigureEventOutbox();

        modelBuilder.ConfigurePayment();
    }
}
