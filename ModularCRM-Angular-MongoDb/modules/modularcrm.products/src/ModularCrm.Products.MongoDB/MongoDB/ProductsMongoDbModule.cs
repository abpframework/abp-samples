using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;
using Volo.Abp.MongoDB;

namespace ModularCrm.Products.MongoDB;

[DependsOn(
    typeof(ProductsDomainModule),
    typeof(AbpMongoDbModule)
    )]
public class ProductsMongoDbModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddMongoDbContext<ProductsMongoDbContext>(options =>
        {
            options.AddDefaultRepositories();
            
            /* Add custom repositories here. Example:
             * options.AddRepository<Question, MongoQuestionRepository>();
             */
        });
    }
}
