using ModularCrm.Ordering.Contracts;
using Volo.Abp.Modularity;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared;
using Microsoft.Extensions.DependencyInjection;

namespace ModularCrm.Ordering;

[DependsOn(
    typeof(ModularCrmOrderingContractsModule),
    typeof(AbpAspNetCoreMvcUiThemeSharedModule)
)]
public class OrderingWebModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<IMvcBuilder>(mvcBuilder =>
        {
            mvcBuilder.AddApplicationPartIfNotExists(typeof(OrderingWebModule).Assembly);
        });
    }
}