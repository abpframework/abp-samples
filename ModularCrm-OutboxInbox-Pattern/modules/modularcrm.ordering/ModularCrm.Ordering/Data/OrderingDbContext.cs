using ModularCrm.Ordering.Entities;
using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;
using Volo.Abp.MongoDB.DistributedEvents;

namespace ModularCrm.Ordering.Data;

[ConnectionStringName(OrderingDbProperties.ConnectionStringName)]
public class OrderingDbContext : AbpMongoDbContext, IOrderingDbContext
{
    public IMongoCollection<IncomingEventRecord> IncomingEvents => Collection<IncomingEventRecord>();
    public IMongoCollection<OutgoingEventRecord> OutgoingEvents => Collection<OutgoingEventRecord>();
    public IMongoCollection<Order> Orders => Collection<Order>();

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.ConfigureEventInbox();
        modelBuilder.ConfigureEventOutbox();

        modelBuilder.ConfigureOrdering();
    }
}
