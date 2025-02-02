using ModularCrm.Products;
using ModularCrm.Products.MongoDB;
using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.MongoDB;

namespace ModularCrm.Data;

[ConnectionStringName("Default")]
[ReplaceDbContext(typeof(IProductsMongoDbContext))]
public class ModularCrmDbContext : 
    AbpMongoDbContext,
    IProductsMongoDbContext
{
    public IMongoCollection<Product> Products => Collection<Product>();

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.ConfigureProducts();
    }
}

