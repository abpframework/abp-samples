using EShopOnAbp.CatalogService.Localization;
using EShopOnAbp.OrderingService;
using Volo.Abp.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Modularity;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace EShopOnAbp.CatalogService;

[DependsOn(
    typeof(AbpValidationModule),
    typeof(OrderingServiceDomainSharedModule)
)]
public class CatalogServiceDomainSharedModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<CatalogServiceDomainSharedModule>();
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Add<CatalogServiceResource>("en")
                .AddBaseTypes(typeof(AbpValidationResource))
                .AddVirtualJson("/Localization/CatalogService");

            options.DefaultResourceType = typeof(CatalogServiceResource);
        });

        Configure<AbpExceptionLocalizationOptions>(options =>
        {
            options.MapCodeNamespace("CatalogService", typeof(CatalogServiceResource));
        });
    }
}