using System;

namespace EShopOnAbp.BasketService.Services;

public class BasketProductUpdatedEto
{
    public Guid ProductId { get; set; }
    public string ProductName { get; set; }
}