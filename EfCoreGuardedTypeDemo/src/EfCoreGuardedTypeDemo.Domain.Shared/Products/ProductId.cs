using System;

namespace EfCoreGuardedTypeDemo.Products;

public readonly struct ProductId
{
    public ProductId(Guid value) => Value = value;
    public Guid Value { get; }
}