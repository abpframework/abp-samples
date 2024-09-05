using Acme.Ecommerce.OrderingService.Enums;
using System;
using Volo.Abp.Domain.Entities;

namespace ModularCrm.Ordering.Entities
{
    public class Order : AggregateRoot<Guid>
    {
        public Guid ProductId { get; set; }
        public string CustomerName { get; set; }
        public OrderState State { get; set; }
    }
}
