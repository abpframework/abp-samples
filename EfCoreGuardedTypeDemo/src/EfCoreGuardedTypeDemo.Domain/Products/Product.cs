using EfCoreGuardedTypeDemo.Categories;
using Volo.Abp;
using Volo.Abp.Domain.Entities;

namespace EfCoreGuardedTypeDemo.Products;

public class Product : AggregateRoot<ProductId>
{
    public ProductId Id { get; set; }
    public string Name { get; set; }
    public CategoryId CategoryId { get; set; }

    private Product()
    {
    }

    public Product(ProductId id, string name) : base(id)
    {
        Name = Check.NotNullOrEmpty(name, nameof(name));
    }
}