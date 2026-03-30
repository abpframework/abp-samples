using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.RequestLocalization;
using Microsoft.Extensions.Hosting;
using BookStore.Localization;
using BookStore.Mvc.Menus;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Basic;
using Volo.Abp.Autofac;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;

namespace BookStore.Mvc;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(AbpAspNetCoreMvcModule),
    typeof(AbpAspNetCoreMvcUiBasicThemeModule),
    typeof(BookStoreSharedModule)
)]
public class BookStoreMvcModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.PreConfigure<AbpMvcDataAnnotationsLocalizationOptions>(options =>
        {
            options.AddAssemblyResource(typeof(BookStoreResource));
        });
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpLocalizationOptions>(options =>
        {
            options.DefaultResourceType = typeof(BookStoreResource);

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
            options.MenuContributors.Add(new BookStoreMenuContributor());
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
