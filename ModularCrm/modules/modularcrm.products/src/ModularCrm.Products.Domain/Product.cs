using System;
using Volo.Abp.Domain.Entities;

namespace ModularCrm.Products;

public class Product : AggregateRoot<Guid>
{
    public string Name { get; set; }
    public int StockCount { get; set; }
}