using Localization.Resources.AbpUi;
using ModularCrm.Products.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace ModularCrm.Products;

[DependsOn(
    typeof(ProductsApplicationContractsModule),
    typeof(AbpAspNetCoreMvcModule))]
public class ProductsHttpApiModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<IMvcBuilder>(mvcBuilder =>
        {
            mvcBuilder.AddApplicationPartIfNotExists(typeof(ProductsHttpApiModule).Assembly);
        });
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Get<ProductsResource>()
                .AddBaseTypes(typeof(AbpUiResource));
        });
    }
}
