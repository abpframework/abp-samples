using System;

namespace EfCoreGuardedTypeDemo.Categories;

public struct CategoryId
{
    public CategoryId(Guid value) => Value = value;
    public Guid Value { get; }
}