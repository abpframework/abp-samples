using Volo.Abp.Application;
using Volo.Abp.Authorization;
using Volo.Abp.Modularity;
using Volo.Abp.ObjectExtending;

namespace EShopOnAbp.CatalogService;

[DependsOn(
    typeof(CatalogServiceDomainSharedModule),
    typeof(AbpObjectExtendingModule),
    typeof(AbpDddApplicationContractsModule),
    typeof(AbpAuthorizationModule)
)]
public class CatalogServiceApplicationContractsModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        CatalogServiceDtoExtensions.Configure();
    }
}