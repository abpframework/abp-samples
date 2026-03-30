using Blazorise.Bootstrap5;
using Blazorise.Icons.FontAwesome;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.RequestLocalization;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using BookStore.Blazor.WebApp.Client;
using BookStore.Blazor.WebApp.Components;
using BookStore.Localization;
using Volo.Abp;
using Volo.Abp.AspNetCore.Components.Server.BasicTheme;
using Volo.Abp.AspNetCore.Components.Server.BasicTheme.Bundling;
using Volo.Abp.AspNetCore.Components.Web;
using Volo.Abp.AspNetCore.Components.Web.Theming.Routing;
using Volo.Abp.AspNetCore.Components.WebAssembly.BasicTheme.Bundling;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.Autofac;
using Volo.Abp.AspNetCore.Components.Web.Theming.Toolbars;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;
using BookStore.Blazor.Shared;
using BookStore.Blazor.Shared.Menus;

namespace BookStore.Blazor.WebApp;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(AbpAspNetCoreMvcModule),
    typeof(AbpAspNetCoreComponentsServerBasicThemeModule),
    typeof(AbpAspNetCoreComponentsWebAssemblyBasicThemeBundlingModule),
    typeof(BookStoreSharedModule)
)]
public class BookStoreBlazorWebAppModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.PreConfigure<AbpMvcDataAnnotationsLocalizationOptions>(options =>
        {
            options.AddAssemblyResource(typeof(BookStoreResource));
        });

        PreConfigure<AbpAspNetCoreComponentsWebOptions>(options =>
        {
            options.IsBlazorWebApp = true;
        });
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddRazorComponents()
            .AddInteractiveServerComponents()
            .AddInteractiveWebAssemblyComponents();

        context.Services
            .AddBootstrap5Providers()
            .AddFontAwesomeIcons();

        Configure<AbpRouterOptions>(options =>
        {
            options.AppAssembly = typeof(BookStoreBlazorWebAppModule).Assembly;
            options.AdditionalAssemblies.Add(typeof(BookStoreBlazorWebAppClientModule).Assembly);
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options.DefaultResourceType = typeof(BookStoreResource);

            options.Languages.Add(new LanguageInfo("en", "en", "English"));
            options.Languages.Add(new LanguageInfo("tr", "tr", "Türkçe"));
            options.Languages.Add(new LanguageInfo("fr", "fr", "Français"));
            options.Languages.Add(new LanguageInfo("zh-Hans", "zh-Hans", "简体中文"));
        });

        Configure<AbpRequestLocalizationOptions>(options =>
        {
            options.UseRouteBasedCulture = true;
        });

        Configure<AbpBundlingOptions>(options =>
        {
            options.StyleBundles.Configure(
                BlazorBasicThemeBundles.Styles.Global,
                bundle => { bundle.AddFiles("/blazor-global-styles.css"); }
            );
        });

        Configure<AbpNavigationOptions>(options =>
        {
            options.MenuContributors.Add(new BookStoreMenuContributor());
        });

        Configure<AbpToolbarOptions>(options =>
        {
            options.Contributors.Add(new RemoveLoginDisplayToolbarContributor());
        });
    }

    public override void OnApplicationInitialization(ApplicationInitializationContext context)
    {
        var app = context.GetApplicationBuilder();
        var env = context.GetEnvironment();

        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
            app.UseWebAssemblyDebugging();
        }

        app.UseCorrelationId();
        app.MapAbpStaticAssets();
        app.UseRouting();
        app.UseAbpRequestLocalization();
        app.UseAntiforgery();
        app.UseAuthorization();

        app.UseConfiguredEndpoints(builder =>
        {
            builder.MapRazorComponents<App>()
                .AddInteractiveServerRenderMode()
                .AddInteractiveWebAssemblyRenderMode()
                .AddAdditionalAssemblies(
                    builder.ServiceProvider
                        .GetRequiredService<IOptions<AbpRouterOptions>>().Value
                        .AdditionalAssemblies.ToArray());
        });
    }
}
