using Volo.Abp;
using Volo.Abp.MongoDB;

namespace ModularCrm.Products.MongoDB;

public static class ProductsMongoDbContextExtensions
{
    public static void ConfigureProducts(
        this IMongoModelBuilder builder)
    {
        Check.NotNull(builder, nameof(builder));
    }
}
