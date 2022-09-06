using Localization.Resources.AbpUi;
using EShopOnAbp.OrderingService.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace EShopOnAbp.OrderingService
{
    [DependsOn(
        typeof(OrderingServiceApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class OrderingServiceHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(OrderingServiceHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<OrderingServiceResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}
