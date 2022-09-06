using System;

namespace EShopOnAbp.BasketService.Services;

public class BasketItemDto
{
    public Guid ProductId { get; set; }
    public string ProductName { get; set; }
    public string ProductCode { get; set; }
    public string ImageName { get; set; }
    public int Count { get; set; }
    public float TotalPrice { get; set; }
}