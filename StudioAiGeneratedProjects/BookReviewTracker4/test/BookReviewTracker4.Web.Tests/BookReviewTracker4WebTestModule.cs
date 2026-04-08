using System.Collections.Generic;
using System.Globalization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using BookReviewTracker4.EntityFrameworkCore;
using BookReviewTracker4.Web;
using BookReviewTracker4.Web.Menus;
using Volo.Abp.AspNetCore.TestBase;
using Volo.Abp.Modularity;
using Volo.Abp.OpenIddict;
using Volo.Abp.UI.Navigation;

namespace BookReviewTracker4;

[DependsOn(
    typeof(AbpAspNetCoreTestBaseModule),
    typeof(BookReviewTracker4WebModule),
    typeof(BookReviewTracker4ApplicationTestModule),
    typeof(BookReviewTracker4EntityFrameworkCoreTestModule)
)]
public class BookReviewTracker4WebTestModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        var builder = new ConfigurationBuilder();
        builder.AddJsonFile("appsettings.json", false);
        builder.AddJsonFile("appsettings.secrets.json", true);
        context.Services.ReplaceConfiguration(builder.Build());

        context.Services.PreConfigure<IMvcBuilder>(builder =>
        {
            builder.PartManager.ApplicationParts.Add(new CompiledRazorAssemblyPart(typeof(BookReviewTracker4WebModule).Assembly));
        });

        context.Services.GetPreConfigureActions<OpenIddictServerBuilder>().Clear();
        PreConfigure<AbpOpenIddictAspNetCoreOptions>(options =>
        {
            options.AddDevelopmentEncryptionAndSigningCertificate = true;
        });
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        ConfigureLocalizationServices(context.Services);
        ConfigureNavigationServices(context.Services);
    }

    private static void ConfigureLocalizationServices(IServiceCollection services)
    {
        var cultures = new List<CultureInfo> { new CultureInfo("en"), new CultureInfo("tr") };
        services.Configure<RequestLocalizationOptions>(options =>
        {
            options.DefaultRequestCulture = new RequestCulture("en");
            options.SupportedCultures = cultures;
            options.SupportedUICultures = cultures;
        });
    }

    private static void ConfigureNavigationServices(IServiceCollection services)
    {
        services.Configure<AbpNavigationOptions>(options =>
        {
            options.MenuContributors.Add(new BookReviewTracker4MenuContributor());
        });
    }
}
