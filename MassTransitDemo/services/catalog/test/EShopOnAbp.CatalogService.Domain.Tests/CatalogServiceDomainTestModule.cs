using EShopOnAbp.CatalogService.MongoDB;
using Volo.Abp.Modularity;

namespace EShopOnAbp.CatalogService
{
    [DependsOn(
        typeof(CatalogServiceMongoDbTestModule)
        )]
    public class CatalogServiceDomainTestModule : AbpModule
    {

    }
}