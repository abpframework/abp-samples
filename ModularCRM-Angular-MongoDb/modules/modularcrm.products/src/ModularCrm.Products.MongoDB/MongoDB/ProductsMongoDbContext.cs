using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace ModularCrm.Products.MongoDB;

[ConnectionStringName(ProductsDbProperties.ConnectionStringName)]
public class ProductsMongoDbContext : AbpMongoDbContext, IProductsMongoDbContext
{
    /* Add mongo collections here. Example:
     * public IMongoCollection<Question> Questions => Collection<Question>();
     */

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.ConfigureProducts();
    }
}
