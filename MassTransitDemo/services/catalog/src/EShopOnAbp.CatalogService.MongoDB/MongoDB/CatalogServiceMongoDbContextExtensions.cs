using EShopOnAbp.CatalogService.Products;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace EShopOnAbp.CatalogService.MongoDB
{
    public static class CatalogServiceMongoDbContextExtensions
    {
        public static void ConfigureCatalogService(
            this IMongoModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));
            
            builder.Entity<Product>(x =>
            {
                x.CollectionName = "Products";
            });
        }
    }
}
