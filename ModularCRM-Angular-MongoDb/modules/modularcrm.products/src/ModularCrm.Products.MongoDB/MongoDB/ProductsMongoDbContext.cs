using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace ModularCrm.Products.MongoDB;

[ConnectionStringName(ProductsDbProperties.ConnectionStringName)]
public class ProductsMongoDbContext : AbpMongoDbContext, IProductsMongoDbContext
{
     public IMongoCollection<Product> Products => Collection<Product>();

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.ConfigureProducts();
    }
}
