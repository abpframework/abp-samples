using System;
using Volo.Abp.Domain.Entities;
using ModularCrm.Ordering.Contracts.Enums;

namespace ModularCrm.Ordering.Entities
{
    public class Order : AggregateRoot<Guid>
    {
        public Guid ProductId { get; set; }
        public string CustomerName { get; set; }
        public OrderState State { get; set; }
    }
}
