using System;

namespace ModularCrm.Catalog;

public class ProductDto
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public int StockCount { get; set; }
}