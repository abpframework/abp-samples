using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace ModularCrm.Products.MongoDB;

[ConnectionStringName(ProductsDbProperties.ConnectionStringName)]
public interface IProductsMongoDbContext : IAbpMongoDbContext
{
    IMongoCollection<Product> Products { get; }
}
