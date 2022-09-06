using Volo.Abp.Application;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;

namespace EShopOnAbp.CatalogService;

[DependsOn(
    typeof(CatalogServiceDomainModule),
    typeof(CatalogServiceApplicationContractsModule),
    typeof(AbpDddApplicationModule)
)]
public class CatalogServiceApplicationModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpAutoMapperOptions>(options => { options.AddMaps<CatalogServiceApplicationModule>(); });
    }
}