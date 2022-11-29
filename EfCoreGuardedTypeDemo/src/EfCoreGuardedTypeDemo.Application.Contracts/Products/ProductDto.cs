using EfCoreGuardedTypeDemo.Categories;

namespace EfCoreGuardedTypeDemo.Products;

public class ProductDto
{
    public ProductId Id { get; set; }
    public string Name { get; set; }
    public CategoryId CategoryId { get; set; }
}