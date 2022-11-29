using System.Collections.Generic;
using EfCoreGuardedTypeDemo.Products;
using Volo.Abp;
using Volo.Abp.Domain.Entities;

namespace EfCoreGuardedTypeDemo.Categories;

public class Category : AggregateRoot<CategoryId>
{
    public CategoryId Id { get; set; }
    public string Name { get; set; }
    public List<Product> Products { get; } = new();

    private Category()
    {
    }

    public Category(CategoryId id, string name) : base(id)
    {
        Name = Check.NotNullOrEmpty(name, nameof(name));
    }
}