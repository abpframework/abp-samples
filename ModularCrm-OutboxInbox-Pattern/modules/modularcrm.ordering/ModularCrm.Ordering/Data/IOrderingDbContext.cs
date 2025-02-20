using ModularCrm.Ordering.Entities;
using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;
using Volo.Abp.MongoDB.DistributedEvents;

namespace ModularCrm.Ordering.Data;

[ConnectionStringName(OrderingDbProperties.ConnectionStringName)]
public interface IOrderingDbContext : IAbpMongoDbContext, IHasEventInbox, IHasEventOutbox
{
    IMongoCollection<Order> Orders { get; }
}
