using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.RequestLocalization;
using Microsoft.Extensions.Hosting;
using UrlBasedLocalizationSample.Localization;
using UrlBasedLocalizationSample.Menus;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Basic;
using Volo.Abp.Autofac;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;
using Volo.Abp.VirtualFileSystem;

namespace UrlBasedLocalizationSample;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(AbpAspNetCoreMvcModule),
    typeof(AbpAspNetCoreMvcUiBasicThemeModule)
)]
public class UrlBasedLocalizationSampleModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.PreConfigure<AbpMvcDataAnnotationsLocalizationOptions>(options =>
        {
            options.AddAssemblyResource(typeof(UrlBasedLocalizationSampleResource));
        });
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        var hostingEnvironment = context.Services.GetHostingEnvironment();

        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<UrlBasedLocalizationSampleModule>();
            if (hostingEnvironment.IsDevelopment())
            {
                options.FileSets.ReplaceEmbeddedByPhysical<UrlBasedLocalizationSampleModule>(
                    hostingEnvironment.ContentRootPath);
            }
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Add<UrlBasedLocalizationSampleResource>("en")
                .AddVirtualJson("/Localization");

            options.DefaultResourceType = typeof(UrlBasedLocalizationSampleResource);

            options.Languages.Add(new LanguageInfo("en", "en", "English"));
            options.Languages.Add(new LanguageInfo("tr", "tr", "Türkçe"));
            options.Languages.Add(new LanguageInfo("fr", "fr", "Français"));
            options.Languages.Add(new LanguageInfo("zh-Hans", "zh-Hans", "简体中文"));
        });

        // Enable URL-based culture detection.
        Configure<AbpRequestLocalizationOptions>(options =>
        {
            options.UseRouteBasedCulture = true;
        });

        Configure<AbpNavigationOptions>(options =>
        {
            options.MenuContributors.Add(new UrlBasedLocalizationSampleMenuContributor());
        });
    }

    public override void OnApplicationInitialization(ApplicationInitializationContext context)
    {
        var app = context.GetApplicationBuilder();
        var env = context.GetEnvironment();

        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }

        app.UseCorrelationId();
        app.MapAbpStaticAssets();
        app.UseRouting();
        app.UseAbpRequestLocalization();
        app.UseAuthorization();

        app.UseConfiguredEndpoints();
    }
}
