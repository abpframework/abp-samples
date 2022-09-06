using System;
using Volo.Abp.Application.Dtos;

namespace EShopOnAbp.OrderingService.Orders;

public class OrderItemDto : EntityDto<Guid>
{
    public Guid ProductId { get; set; }
    public string ProductName { get; set; }
    public string PictureUrl { get; set; }
    public decimal UnitPrice { get; set; }
    public decimal Discount { get; set; }
    public int Units { get; set; }
}