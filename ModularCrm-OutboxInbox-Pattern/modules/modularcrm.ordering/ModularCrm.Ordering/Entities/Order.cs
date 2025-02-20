using System;
using ModularCrm.Ordering.Enums;
using Volo.Abp.Domain.Entities.Auditing;

namespace ModularCrm.Ordering.Entities;

public class Order : CreationAuditedAggregateRoot<Guid>
{
    public Guid ProductId { get; set; }

    public string CustomerName { get; set; }

    public OrderState State { get; set; }
}
