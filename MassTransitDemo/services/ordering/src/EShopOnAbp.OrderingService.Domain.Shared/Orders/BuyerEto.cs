using System;
using Volo.Abp.Domain.Entities.Events.Distributed;

namespace EShopOnAbp.OrderingService.Orders;

public class BuyerEto : EtoBase
{
    public Guid? BuyerId { get; set; }
    public string BuyerEmail { get; set; }
    public string BuyerName { get; set; }
}