using EShopOnAbp.BasketService.Localization;
using EShopOnAbp.CatalogService;
using Volo.Abp.Application;
using Volo.Abp.Authorization;

using Volo.Abp.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Modularity;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;

namespace EShopOnAbp.BasketService;

[DependsOn(
    typeof(CatalogServiceApplicationContractsModule),
    typeof(AbpDddApplicationContractsModule),
    typeof(AbpAuthorizationModule),
    typeof(AbpValidationModule)
)]
public class BasketServiceContractsModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Add<BasketServiceResource>("en")
                .AddBaseTypes(typeof(AbpValidationResource))
                .AddVirtualJson("/Localization/BasketService");

            options.DefaultResourceType = typeof(BasketServiceResource);
        });

        Configure<AbpExceptionLocalizationOptions>(options =>
        {
            options.MapCodeNamespace("BasketService", typeof(BasketServiceResource));
        });
    }
}