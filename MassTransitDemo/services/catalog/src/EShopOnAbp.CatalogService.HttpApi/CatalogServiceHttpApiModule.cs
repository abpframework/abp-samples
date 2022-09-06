using EShopOnAbp.CatalogService.Localization;
using Localization.Resources.AbpUi;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;

namespace EShopOnAbp.CatalogService
{
    [DependsOn(
        typeof(CatalogServiceApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule)
        )]
    public class CatalogServiceHttpApiModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            ConfigureLocalization();
        }

        private void ConfigureLocalization()
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<CatalogServiceResource>()
                    .AddBaseTypes(
                        typeof(AbpUiResource)
                    );
            });
        }
    }
}
