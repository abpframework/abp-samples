using MudBlazor.Services;
using Volo.Abp.AspNetCore.Components.Web.Theming;
using Volo.Abp.Modularity;

namespace Volo.Abp.AspNetCore.Components.Web.BasicTheme;

[DependsOn(
    typeof(AbpAspNetCoreComponentsWebThemingModule)
)]
public class AbpAspNetCoreComponentsWebBasicThemeModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        base.ConfigureServices(context);
        context.Services.AddMudServices();
    }
}