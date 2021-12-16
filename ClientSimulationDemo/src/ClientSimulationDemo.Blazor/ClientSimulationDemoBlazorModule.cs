using System;
using System.Net.Http;
using Blazorise;
using Blazorise.Bootstrap5;
using Blazorise.Icons.FontAwesome;
using IdentityModel;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AspNetCore.Components.Web.BasicTheme.Themes.Basic;
using Volo.Abp.AspNetCore.Components.Web.Theming.Routing;
using Volo.Abp.AspNetCore.Components.WebAssembly.BasicTheme;
using Volo.Abp.Autofac.WebAssembly;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;
using Volo.Abp.AutoMapper;
using Volo.Abp.Identity.Blazor.WebAssembly;
using Volo.Abp.SettingManagement.Blazor.WebAssembly;
using Volo.Abp.TenantManagement.Blazor.WebAssembly;

namespace ClientSimulationDemo.Blazor
{
    [DependsOn(
        typeof(AbpAutofacWebAssemblyModule),
        typeof(ClientSimulationDemoHttpApiClientModule),
        typeof(AbpAspNetCoreComponentsWebAssemblyBasicThemeModule),
        typeof(AbpIdentityBlazorWebAssemblyModule),
        typeof(AbpTenantManagementBlazorWebAssemblyModule),
        typeof(AbpSettingManagementBlazorWebAssemblyModule)
    )]
    public class ClientSimulationDemoBlazorModule : AbpModule
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

            context.Services
                .AddBootstrap5Providers()
                .AddFontAwesomeIcons();
        }

        private void ConfigureRouter(ServiceConfigurationContext context)
        {
            Configure<AbpRouterOptions>(options =>
            {
                options.AppAssembly = typeof(ClientSimulationDemoBlazorModule).Assembly;
            });
        }

        private void ConfigureMenu(ServiceConfigurationContext context)
        {
            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new ClientSimulationDemoMenuContributor());
            });
        }

        private void ConfigureBlazorise(ServiceConfigurationContext context)
        {
            context.Services
                .AddBlazorise()
                .AddBootstrap5Providers()
                .AddFontAwesomeIcons();
        }

        private static void ConfigureAuthentication(WebAssemblyHostBuilder builder)
        {
            builder.Services.AddOidcAuthentication(options =>
            {
                builder.Configuration.Bind("AuthServer", options.ProviderOptions);
                options.UserOptions.RoleClaim = JwtClaimTypes.Role;
                options.ProviderOptions.DefaultScopes.Add("ClientSimulationDemo");
                options.ProviderOptions.DefaultScopes.Add("role");
                options.ProviderOptions.DefaultScopes.Add("email");
                options.ProviderOptions.DefaultScopes.Add("phone");
            });
        }

        private static void ConfigureUI(WebAssemblyHostBuilder builder)
        {
            builder.RootComponents.Add<App>("app");
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
                options.AddMaps<ClientSimulationDemoBlazorModule>();
            });
        }
    }
}
