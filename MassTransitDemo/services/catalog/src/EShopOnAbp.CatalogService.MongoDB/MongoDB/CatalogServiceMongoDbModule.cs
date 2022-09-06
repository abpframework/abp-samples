using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;
using Volo.Abp.MongoDB;

namespace EShopOnAbp.CatalogService.MongoDB
{
    [DependsOn(
        typeof(CatalogServiceDomainModule),
        typeof(AbpMongoDbModule)
        )]
    public class CatalogServiceMongoDbModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddMongoDbContext<CatalogServiceMongoDbContext>(options =>
            {
                options.AddDefaultRepositories();
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, MongoQuestionRepository>();
                 */
            });
        }
    }
}
