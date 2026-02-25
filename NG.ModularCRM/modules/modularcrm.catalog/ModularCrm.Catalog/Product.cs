using System;
using Volo.Abp.Domain.Entities;

namespace ModularCrm.Catalog;

public class Product : AggregateRoot<Guid>
{
    public string Name { get; set; } = string.Empty;

    public int StockCount { get; set; }
}
