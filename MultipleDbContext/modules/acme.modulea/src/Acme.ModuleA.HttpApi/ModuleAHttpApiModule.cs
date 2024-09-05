using Localization.Resources.AbpUi;
using Acme.ModuleA.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace Acme.ModuleA;

[DependsOn(
    typeof(ModuleAApplicationContractsModule),
    typeof(AbpAspNetCoreMvcModule))]
public class ModuleAHttpApiModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<IMvcBuilder>(mvcBuilder =>
        {
            mvcBuilder.AddApplicationPartIfNotExists(typeof(ModuleAHttpApiModule).Assembly);
        });
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Get<ModuleAResource>()
                .AddBaseTypes(typeof(AbpUiResource));
        });
    }
}
