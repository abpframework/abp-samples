using ModularCrm.Payment.Entities;
using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;
using Volo.Abp.MongoDB.DistributedEvents;

namespace ModularCrm.Payment.Data;

[ConnectionStringName(PaymentDbProperties.ConnectionStringName)]
public interface IPaymentMongoDbContext : IAbpMongoDbContext, IHasEventInbox, IHasEventOutbox
{
    IMongoCollection<PaymentRecord> PaymentRecords { get; }
}
