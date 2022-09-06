using System;

namespace EShopOnAbp.CatalogService.Products;

public class ProductEto
{
    public Guid Id { get; set; }
    
    public string Code { get; set; }

    public string Name { get; set; }

    public float Price { get; set; }

    public int StockCount { get; set; }

    public string ImageName { get; set; }
}