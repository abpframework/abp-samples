using System;

namespace EfCoreGuardedTypeDemo.Categories;

public readonly struct CategoryId
{
    public CategoryId(Guid value) => Value = value;
    public Guid Value { get; }
}