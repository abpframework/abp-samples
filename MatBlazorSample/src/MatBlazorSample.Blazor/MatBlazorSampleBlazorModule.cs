using System;
using System.Net.Http;
using Blazorise;
using Blazorise.Bootstrap;
using Blazorise.Icons.FontAwesome;
using IdentityModel;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MatBlazorSample.Blazor.Components.Layout;
using MatBlazorSample.Blazor.Navigation;
using Volo.Abp;
using Volo.Abp.Account.Pro.Admin.Blazor;
using Volo.Abp.AspNetCore.Components.WebAssembly.LeptonTheme;
using Volo.Abp.AspNetCore.Components.WebAssembly.LeptonTheme.Components;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming.Routing;
using Volo.Abp.AuditLogging.Blazor;
using Volo.Abp.Autofac.WebAssembly;
using Volo.Abp.AutoMapper;
using Volo.Abp.Identity.Pro.Blazor;
using Volo.Abp.IdentityServer.Blazor;
using Volo.Abp.LeptonTheme.Management.Blazor;
using Volo.Abp.Modularity;
using Volo.Abp.TextTemplateManagement.Blazor;
using Volo.Abp.SettingManagement.Blazor;
using Volo.Abp.UI.Navigation;
using Volo.Saas.Host.Blazor;
using Volo.Abp.LanguageManagement.Blazor;
using MatBlazor;

namespace MatBlazorSample.Blazor
{
    [DependsOn(
        typeof(AbpAutofacWebAssemblyModule),
        typeof(MatBlazorSampleHttpApiClientModule),
        typeof(AbpAspNetCoreComponentsWebAssemblyLeptonThemeModule),
        typeof(AbpIdentityProBlazorModule),
        typeof(SaasHostBlazorModule),
        typeof(AbpSettingManagementBlazorModule),
        typeof(LeptonThemeManagementBlazorModule),
        typeof(AbpAccountAdminBlazorModule),
        typeof(AbpAuditLoggingBlazorModule),
        typeof(TextTemplateManagementBlazorModule),
        typeof(LanguageManagementBlazorModule),
        typeof(AbpIdentityServerBlazorModule)
    )]
    public class MatBlazorSampleBlazorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var environment = context.Services.GetSingletonInstance<IWebAssemblyHostEnvironment>();
            var builder = context.Services.GetSingletonInstance<WebAssemblyHostBuilder>();

            ConfigureAuthentication(builder);
            ConfigureHttpClient(context, environment);
            ConfigureBlazorise(context);
            ConfigureRouter(context);
            ConfigureUI(builder);
            ConfigureMenu(context);
            ConfigureAutoMapper(context);
            ConfigureLeptonTheme(context);

            builder.Services.AddMatBlazor();
        }

        private void ConfigureRouter(ServiceConfigurationContext context)
        {
            Configure<AbpRouterOptions>(options =>
            {
                options.AppAssembly = typeof(MatBlazorSampleBlazorModule).Assembly;
            });
        }

        private void ConfigureMenu(ServiceConfigurationContext context)
        {
            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new MatBlazorSampleMenuContributor(context.Services.GetConfiguration()));
            });
        }

        private void ConfigureBlazorise(ServiceConfigurationContext context)
        {
            context.Services
                .AddBootstrapProviders()
                .AddFontAwesomeIcons();
        }

        private static void ConfigureAuthentication(WebAssemblyHostBuilder builder)
        {
            builder.Services.AddOidcAuthentication(options =>
            {
                builder.Configuration.Bind("AuthServer", options.ProviderOptions);
                options.UserOptions.RoleClaim = JwtClaimTypes.Role;
                options.ProviderOptions.DefaultScopes.Add("MatBlazorSample");
                options.ProviderOptions.DefaultScopes.Add("role");
                options.ProviderOptions.DefaultScopes.Add("email");
                options.ProviderOptions.DefaultScopes.Add("phone");
            });
        }

        private static void ConfigureUI(WebAssemblyHostBuilder builder)
        {
            builder.RootComponents.Add<App>("#ApplicationContainer");
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
                options.AddMaps<MatBlazorSampleBlazorModule>();
            });
        }

        private void ConfigureLeptonTheme(ServiceConfigurationContext context)
        {
            Configure<LeptonThemeOptions>(options =>
            {
                options.FooterComponent = typeof(MainFooterComponent);
            });
        }
    }
}
