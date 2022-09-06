using Volo.Abp.Modularity;

namespace EShopOnAbp.CatalogService
{
    [DependsOn(
        typeof(CatalogServiceApplicationModule),
        typeof(CatalogServiceDomainTestModule)
        )]
    public class CatalogServiceApplicationTestModule : AbpModule
    {

    }
}