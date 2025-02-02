using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace ModularCrm.Products.MongoDB;

[ConnectionStringName(ProductsDbProperties.ConnectionStringName)]
public interface IProductsMongoDbContext : IAbpMongoDbContext
{
    /* Define mongo collections here. Example:
     * IMongoCollection<Question> Questions { get; }
     */
}
