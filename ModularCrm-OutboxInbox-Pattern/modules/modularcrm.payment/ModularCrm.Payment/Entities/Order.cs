using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace ModularCrm.Payment.Entities;

public class PaymentRecord : CreationAuditedAggregateRoot<Guid>
{
    public string Method { get; set; }

    public decimal Amount { get; set; }

    public Guid OrderId { get; set; }
}
