using System;
using System.Net.Http;
using Blazorise.Bootstrap5;
using Blazorise.Icons.FontAwesome;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Acme.BookStore.Blazor.Client.Navigation;
using Localization.Resources.AbpUi;
using Volo.Abp.Localization;
using Acme.BookStore.Localization;
using OpenIddict.Abstractions;
using Volo.Abp.AspNetCore.Components.Web.Theming.Routing;
using Volo.Abp.Autofac.WebAssembly;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming.Bundling;
using Volo.Abp.AspNetCore.Components.WebAssembly.LeptonXTheme;
using Volo.Abp.AspNetCore.Components.Web.LeptonXTheme;
using Volo.Abp.LeptonX.Shared;
using Volo.Abp.SettingManagement.Blazor.WebAssembly;
using Volo.Abp.FeatureManagement.Blazor.WebAssembly;
using Volo.Abp.Account.Pro.Admin.Blazor.WebAssembly;
using Volo.Abp.Account.Pro.Public.Blazor.WebAssembly;
using Volo.Abp.Identity.Pro.Blazor.Server.WebAssembly;
using Volo.Abp.AuditLogging.Blazor.WebAssembly;
using Volo.Abp.Gdpr.Blazor.Extensions;
using Volo.Abp.Gdpr.Blazor.WebAssembly;
using Volo.Abp.LanguageManagement.Blazor.WebAssembly;
using Volo.Abp.OpenIddict.Pro.Blazor.WebAssembly;
using Volo.Abp.TextTemplateManagement.Blazor.WebAssembly;
using Volo.Saas.Host.Blazor.WebAssembly;

namespace Acme.BookStore.Blazor.Client;

[DependsOn(
    typeof(AbpSettingManagementBlazorWebAssemblyModule),
    typeof(AbpFeatureManagementBlazorWebAssemblyModule),
    typeof(AbpAutofacWebAssemblyModule),
    typeof(AbpAccountAdminBlazorWebAssemblyModule),
    typeof(AbpAccountPublicBlazorWebAssemblyModule),
    typeof(AbpIdentityProBlazorWebAssemblyModule),
    typeof(SaasHostBlazorWebAssemblyModule),
    typeof(AbpOpenIddictProBlazorWebAssemblyModule),
    typeof(AbpAuditLoggingBlazorWebAssemblyModule),
    typeof(AbpGdprBlazorWebAssemblyModule),
    typeof(TextTemplateManagementBlazorWebAssemblyModule),
    typeof(LanguageManagementBlazorWebAssemblyModule),
    typeof(AbpAspNetCoreComponentsWebAssemblyLeptonXThemeModule),
    typeof(BookStoreHttpApiClientModule)
)]
public class BookStoreBlazorClientModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        var environment = context.Services.GetSingletonInstance<IWebAssemblyHostEnvironment>();
        var builder = context.Services.GetSingletonInstance<WebAssemblyHostBuilder>();

        ConfigureLocalization();
        ConfigureAuthentication(builder);
        ConfigureHttpClient(context, environment);
        ConfigureBlazorise(context);
        ConfigureRouter(context);
        ConfigureMenu(context);
        ConfigureAutoMapper(context);
        ConfigureCookieConsent(context);
        ConfigureTheme();
    }
    
    private void ConfigureLocalization()
    {
        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Get<BookStoreResource>()
                .AddBaseTypes(typeof(AbpUiResource));
        });
    }
    
    private void ConfigureCookieConsent(ServiceConfigurationContext context)
    {
        context.Services.AddAbpCookieConsent(options =>
        {
            options.IsEnabled = true;
            options.CookiePolicyUrl = "/CookiePolicy";
            options.PrivacyPolicyUrl = "/PrivacyPolicy";
        });
    }
    
    private void ConfigureTheme()
    {
        Configure<LeptonXThemeOptions>(options =>
        {
            options.DefaultStyle = LeptonXStyleNames.System;
        });

        Configure<LeptonXThemeBlazorOptions>(options =>
        {
            // When Layout is changed, the `options.Parameters["LeptonXTheme.Layout"]` in BookStoreBlazorModule.cs should be updated accordingly.
            options.Layout = LeptonXBlazorLayouts.SideMenu;
        });
    }

    private void ConfigureRouter(ServiceConfigurationContext context)
    {
        Configure<AbpRouterOptions>(options =>
        {
            options.AppAssembly = typeof(BookStoreBlazorClientModule).Assembly;
        });
    }

    private void ConfigureMenu(ServiceConfigurationContext context)
    {
        Configure<AbpNavigationOptions>(options =>
        {
            options.MenuContributors.Add(new BookStoreMenuContributor(context.Services.GetConfiguration()));
        });
    }

    private void ConfigureBlazorise(ServiceConfigurationContext context)
    {
        context.Services
            .AddBootstrap5Providers()
            .AddFontAwesomeIcons();
    }

    private static void ConfigureAuthentication(WebAssemblyHostBuilder builder)
    {
        builder.Services.AddOidcAuthentication(options =>
        {
            builder.Configuration.Bind("AuthServer", options.ProviderOptions);
            options.UserOptions.NameClaim = OpenIddictConstants.Claims.Name;
            options.UserOptions.RoleClaim = OpenIddictConstants.Claims.Role;

            options.ProviderOptions.DefaultScopes.Add("BookStore");
            options.ProviderOptions.DefaultScopes.Add("roles");
            options.ProviderOptions.DefaultScopes.Add("email");
            options.ProviderOptions.DefaultScopes.Add("phone");
        });
    }
    
    private static void ConfigureHttpClient(ServiceConfigurationContext context, IWebAssemblyHostEnvironment environment)
    {
        context.Services.AddTransient(sp => new HttpClient
        {
            BaseAddress = new Uri(environment.BaseAddress)
        });
    }

    private void ConfigureAutoMapper(ServiceConfigurationContext context)
    {
        Configure<AbpAutoMapperOptions>(options =>
        {
            options.AddMaps<BookStoreBlazorClientModule>();
        });
    }
}
