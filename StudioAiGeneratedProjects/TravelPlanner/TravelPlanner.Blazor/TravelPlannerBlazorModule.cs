using Blazorise;
using Blazorise.Bootstrap5;
using Blazorise.Icons.FontAwesome;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming.Bundling;
using TravelPlanner.Menus;
using OpenIddict.Abstractions;
using Volo.Abp.Account;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AspNetCore.Components.Web.LeptonXLiteTheme.Themes.LeptonXLite;
using Volo.Abp.AspNetCore.Components.WebAssembly.LeptonXLiteTheme;
using Volo.Abp.AspNetCore.Components.Web;
using Volo.Abp.AspNetCore.Components.Web.Theming.Routing;
using Volo.Abp.OpenIddict;
using Volo.Abp.Identity.Blazor.WebAssembly;
using Volo.Abp.TenantManagement;
using Volo.Abp.TenantManagement.Blazor.WebAssembly;
using Volo.Abp.Autofac.WebAssembly;
using Volo.Abp.Mapperly;
using Volo.Abp.FeatureManagement;
using Volo.Abp.FeatureManagement.Blazor.WebAssembly;
using Volo.Abp.Identity;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.PermissionManagement.Blazor.WebAssembly;
using Volo.Abp.SettingManagement.Blazor.WebAssembly;
using Volo.Abp.SettingManagement;
using Volo.Abp.UI.Navigation;

namespace TravelPlanner;

[DependsOn(
    typeof(TravelPlannerContractsModule),

    // ABP Framework packages
    typeof(AbpAutofacWebAssemblyModule),

    // Account module packages
    typeof(AbpAccountHttpApiClientModule),

    // OpenIddict module packages
    typeof(AbpOpenIddictDomainSharedModule),

    // Identity module packages
    typeof(AbpIdentityBlazorWebAssemblyModule),
    typeof(AbpIdentityHttpApiClientModule),

    // Language Management module packages
    typeof(AbpTenantManagementBlazorWebAssemblyModule),
    typeof(AbpTenantManagementHttpApiClientModule),

    // Permission Management module packages
    typeof(AbpPermissionManagementBlazorWebAssemblyModule),
    typeof(AbpPermissionManagementHttpApiClientModule),

    // Feature Management module packages
    typeof(AbpFeatureManagementBlazorWebAssemblyModule),
    typeof(AbpFeatureManagementHttpApiClientModule),

    // Setting Management module packages
    typeof(AbpSettingManagementHttpApiClientModule),
    typeof(AbpSettingManagementBlazorWebAssemblyModule),

    // Theme
    typeof(AbpAspNetCoreComponentsWebAssemblyLeptonXLiteThemeModule)
)]
public class TravelPlannerBlazorModule : AbpModule
{
    public const string RemoteServiceName = "Default";

    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<AbpAspNetCoreComponentsWebOptions>(options =>
        {
            options.IsBlazorWebApp = true;
        });
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        var environment = context.Services.GetSingletonInstance<IWebAssemblyHostEnvironment>();
        var builder = context.Services.GetSingletonInstance<WebAssemblyHostBuilder>();
        var configuration = context.Services.GetConfiguration();

        ConfigureAuthentication(builder);
        ConfigureHttpClient(context, environment);
        ConfigureHttpClientProxies(context);
        ConfigureBlazorise(context);
        ConfigureRouter(context);
        ConfigureMenu(context);
    }


    private void ConfigureRouter(ServiceConfigurationContext context)
    {
        Configure<AbpRouterOptions>(options =>
        {
            options.AppAssembly = typeof(TravelPlannerBlazorModule).Assembly;
        });
    }

    private void ConfigureMenu(ServiceConfigurationContext context)
    {
        Configure<AbpNavigationOptions>(options =>
        {
            options.MenuContributors.Add(new TravelPlannerMenuContributor(context.Services.GetConfiguration()));
        });
    }

    private void ConfigureBlazorise(ServiceConfigurationContext context)
    {
        context.Services
            .AddBlazorise(options =>
            {
                // TODO (IMPORTANT): To use Blazorise, you need a license key. Get your license key directly from Blazorise, follow  the instructions at https://abp.io/faq#how-to-get-blazorise-license-key
                //options.ProductToken = "Your Product Token";
            })
            .AddBootstrap5Providers()
            .AddFontAwesomeIcons();
    }

    private static void ConfigureAuthentication(WebAssemblyHostBuilder builder)
    {
        builder.Services.AddBlazorWebAppServices();
    }

    private static void ConfigureHttpClient(ServiceConfigurationContext context, IWebAssemblyHostEnvironment environment)
    {
        context.Services.AddTransient(sp => new HttpClient
        {
            BaseAddress = new Uri(environment.BaseAddress)
        });
    }

    private void ConfigureHttpClientProxies(ServiceConfigurationContext context)
    {
        context.Services.AddHttpClientProxies(
            typeof(TravelPlannerContractsModule).Assembly,
            RemoteServiceName
        );
    }
}
