using Volo.Abp.Application.Dtos;

namespace EShopOnAbp.OrderingService.Orders;

public class OrderStatusDto : EntityDto
{
    public int CountOfStatusOrder { get; set; }
    public string OrderStatus { get; set; }
    public decimal TotalIncome { get; set; }
}