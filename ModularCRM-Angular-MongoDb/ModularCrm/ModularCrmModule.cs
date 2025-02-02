using ModularCrm.Products.MongoDB;
using ModularCrm.Products;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using ModularCrm.Data;
using ModularCrm.Localization;
using Microsoft.Extensions.DependencyInjection.Extensions;
using OpenIddict.Validation.AspNetCore;
using Volo.Abp;
using Volo.Abp.Uow;
using Volo.Abp.Account;
using Volo.Abp.Account.Web;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared;
using Volo.Abp.SettingManagement;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.LeptonXLite;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.LeptonXLite.Bundling;
using Volo.Abp.AspNetCore.Serilog;
using Volo.Abp.Autofac;
using Volo.Abp.AutoMapper;
using Volo.Abp.Caching;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.Emailing;
using Volo.Abp.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Modularity;
using Volo.Abp.MultiTenancy;
using Volo.Abp.PermissionManagement;
using Volo.Abp.PermissionManagement.HttpApi;
using Volo.Abp.PermissionManagement.Identity;
using Volo.Abp.SettingManagement;
using Volo.Abp.Swashbuckle;
using Volo.Abp.UI.Navigation.Urls;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;
using Volo.Abp.TenantManagement;
using Volo.Abp.OpenIddict;
using Volo.Abp.PermissionManagement.OpenIddict;
using Volo.Abp.Security.Claims;
using Volo.Abp.Uow;
using Volo.Abp.OpenIddict.MongoDB;
using Volo.Abp.TenantManagement.MongoDB;
using Volo.Abp.SettingManagement.MongoDB;
using Volo.Abp.PermissionManagement.MongoDB;
using Volo.Abp.Identity.MongoDB;
using Volo.Abp.AuditLogging.MongoDB;
using Volo.Abp.FeatureManagement.MongoDB;
using Volo.Abp.BlobStoring.Database.MongoDB;
using Volo.Abp.BackgroundJobs.MongoDB;
using Volo.Abp.Studio.Client.AspNetCore;

namespace ModularCrm;

[DependsOn(
    // ABP Framework packages
    typeof(AbpAspNetCoreMvcModule),
    typeof(AbpAutofacModule),
    typeof(AbpAutoMapperModule),
    typeof(AbpCachingModule),
    typeof(AbpSwashbuckleModule),
    typeof(AbpAspNetCoreSerilogModule),
    typeof(AbpStudioClientAspNetCoreModule),

    // theme
    typeof(AbpAspNetCoreMvcUiLeptonXLiteThemeModule),

    // Account module packages
    typeof(AbpAccountApplicationModule),
    typeof(AbpAccountHttpApiModule),
    typeof(AbpAccountWebOpenIddictModule),

    // Identity module packages
    typeof(AbpPermissionManagementDomainIdentityModule),
    typeof(AbpPermissionManagementDomainOpenIddictModule),
    typeof(AbpIdentityApplicationModule),
    typeof(AbpIdentityHttpApiModule),

    // Tenant Management module packages
    typeof(AbpTenantManagementHttpApiModule),
    typeof(AbpTenantManagementApplicationModule),

    // Permission Management module packages
    typeof(AbpPermissionManagementApplicationModule),
    typeof(AbpPermissionManagementHttpApiModule),

    // Feature Management module packages
    typeof(AbpFeatureManagementHttpApiModule),
    typeof(AbpFeatureManagementApplicationModule),

    // Setting Management module packages
    typeof(AbpSettingManagementHttpApiModule),
    typeof(AbpSettingManagementApplicationModule),

    // MongoDB packages for the used modules
    typeof(AbpIdentityMongoDbModule),
    typeof(AbpOpenIddictMongoDbModule),
    typeof(AbpTenantManagementMongoDbModule),
    typeof(AbpAuditLoggingMongoDbModule),
    typeof(AbpPermissionManagementMongoDbModule),
    typeof(AbpFeatureManagementMongoDbModule),
    typeof(AbpSettingManagementMongoDbModule),
    typeof(AbpBackgroundJobsMongoDbModule),
    typeof(BlobStoringDatabaseMongoDbModule)
)]
[DependsOn(
    typeof(ProductsDomainSharedModule),
    typeof(ProductsHttpApiModule),
    typeof(ProductsMongoDbModule),
    typeof(ProductsApplicationModule),
    typeof(ProductsApplicationContractsModule),
    typeof(ProductsDomainModule)
)]
public class ModularCrmModule : AbpModule
{
    /* Single point to enable/disable multi-tenancy */
    private const bool IsMultiTenant = true;

    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        var hostingEnvironment = context.Services.GetHostingEnvironment();
        var configuration = context.Services.GetConfiguration();

        context.Services.PreConfigure<AbpMvcDataAnnotationsLocalizationOptions>(options =>
        {
            options.AddAssemblyResource(
                typeof(ModularCrmResource)
            );
        });

        PreConfigure<OpenIddictBuilder>(builder =>
        {
            builder.AddValidation(options =>
            {
                options.AddAudiences("ModularCrm");
                options.UseLocalServer();
                options.UseAspNetCore();
            });
        });

        if (!hostingEnvironment.IsDevelopment())
        {
            PreConfigure<AbpOpenIddictAspNetCoreOptions>(options =>
            {
                options.AddDevelopmentEncryptionAndSigningCertificate = false;
            });

            PreConfigure<OpenIddictServerBuilder>(serverBuilder =>
            {
                serverBuilder.AddProductionEncryptionAndSigningCertificate("openiddict.pfx", configuration["AuthServer:CertificatePassPhrase"]!);
            });
        }

        PreConfigure<IMvcBuilder>(mvcBuilder =>
        {
            mvcBuilder.AddApplicationPartIfNotExists(typeof(ProductsApplicationModule).Assembly);
        });

        ModularCrmGlobalFeatureConfigurator.Configure();
        ModularCrmModuleExtensionConfigurator.Configure();
        ModularCrmEfCoreEntityExtensionMappings.Configure();
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        var hostingEnvironment = context.Services.GetHostingEnvironment();
        var configuration = context.Services.GetConfiguration();

        if (!hostingEnvironment.IsProduction())
        {
            Microsoft.IdentityModel.Logging.IdentityModelEventSource.ShowPII = true;
            Microsoft.IdentityModel.Logging.IdentityModelEventSource.LogCompleteSecurityArtifact = true;
        }

        if (hostingEnvironment.IsDevelopment())
        {
            context.Services.Replace(ServiceDescriptor.Singleton<IEmailSender, NullEmailSender>());
        }

        ConfigureAuthentication(context);
        ConfigureBundles();
        ConfigureMultiTenancy();
        ConfigureUrls(configuration);
        ConfigureAutoMapper(context);
        ConfigureSwagger(context.Services, configuration);
        ConfigureAutoApiControllers();
        ConfigureLocalization();
        ConfigureCors(context, configuration);
        ConfigureDataProtection(context);
        ConfigureVirtualFiles(hostingEnvironment);
        ConfigureMongoDB(context);
    }
    
    
    private void ConfigureAuthentication(ServiceConfigurationContext context)
    {
        context.Services.ForwardIdentityAuthenticationForBearer(OpenIddictValidationAspNetCoreDefaults.AuthenticationScheme);
        context.Services.Configure<AbpClaimsPrincipalFactoryOptions>(options =>
        {
            options.IsDynamicClaimsEnabled = true;
        });
    }

    private void ConfigureBundles()
    {
        Configure<AbpBundlingOptions>(options =>
        {
            options.StyleBundles.Configure(
                LeptonXLiteThemeBundles.Styles.Global,
                bundle => { 
                    bundle.AddFiles("/global-scripts.js"); 
                    bundle.AddFiles("/global-styles.css"); 
                    }
            );
        });
    }

    private void ConfigureMultiTenancy()
    {
        Configure<AbpMultiTenancyOptions>(options =>
        {
            options.IsEnabled = IsMultiTenant;
        });
    }

    private void ConfigureUrls(IConfiguration configuration)
    {
        Configure<AppUrlOptions>(options =>
        {
            options.Applications["MVC"].RootUrl = configuration["App:SelfUrl"];
            options.RedirectAllowedUrls.AddRange(configuration["App:RedirectAllowedUrls"]?.Split(',') ?? Array.Empty<string>());

            options.Applications["Angular"].RootUrl = configuration["App:ClientUrl"];
            options.Applications["Angular"].Urls[AccountUrlNames.PasswordReset] = "account/reset-password";
        });
    }

    private void ConfigureLocalization()
    {
        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Add<ModularCrmResource>("en")
                .AddBaseTypes(typeof(AbpValidationResource))
                .AddVirtualJson("/Localization/ModularCrm");

            options.DefaultResourceType = typeof(ModularCrmResource);

            options.Languages.Add(new LanguageInfo("en", "en", "English"));
            options.Languages.Add(new LanguageInfo("tr", "tr", "Türkçe"));
            options.Languages.Add(new LanguageInfo("ar", "ar", "العربية"));
            options.Languages.Add(new LanguageInfo("cs", "cs", "Čeština"));
            options.Languages.Add(new LanguageInfo("en-GB", "en-GB", "English (UK)"));
            options.Languages.Add(new LanguageInfo("hu", "hu", "Magyar"));
            options.Languages.Add(new LanguageInfo("fi", "fi", "Finnish"));
            options.Languages.Add(new LanguageInfo("fr", "fr", "Français"));
            options.Languages.Add(new LanguageInfo("hi", "hi", "Hindi"));
            options.Languages.Add(new LanguageInfo("is", "is", "Icelandic"));
            options.Languages.Add(new LanguageInfo("it", "it", "Italiano"));
            options.Languages.Add(new LanguageInfo("pt-BR", "pt-BR", "Português"));
            options.Languages.Add(new LanguageInfo("ro-RO", "ro-RO", "Română"));
            options.Languages.Add(new LanguageInfo("ru", "ru", "Русский"));
            options.Languages.Add(new LanguageInfo("sk", "sk", "Slovak"));
            options.Languages.Add(new LanguageInfo("zh-Hans", "zh-Hans", "简体中文"));
            options.Languages.Add(new LanguageInfo("zh-Hant", "zh-Hant", "繁體中文"));
            options.Languages.Add(new LanguageInfo("de-DE", "de-DE", "Deutsch"));
            options.Languages.Add(new LanguageInfo("es", "es", "Español"));
            options.Languages.Add(new LanguageInfo("sv", "sv", "Svenska"));
        });

        Configure<AbpExceptionLocalizationOptions>(options =>
        {
            options.MapCodeNamespace("ModularCrm", typeof(ModularCrmResource));
        });
    }

    private void ConfigureAutoApiControllers()
    {
        Configure<AbpAspNetCoreMvcOptions>(options =>
        {
            options.ConventionalControllers.Create(typeof(ModularCrmModule).Assembly);

            //ADD THE FOLLOWING LINE:
            options.ConventionalControllers.Create(typeof(ProductsApplicationModule).Assembly, settings =>
            {
                settings.RootPath = "products";
            });
        });
    }

    private void ConfigureSwagger(IServiceCollection services, IConfiguration configuration)
    {
        services.AddAbpSwaggerGenWithOAuth(
            configuration["AuthServer:Authority"]!,
            new Dictionary<string, string>
            {
                {"ModularCrm", "ModularCrm API"}
            },
            options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo { Title = "ModularCrm API", Version = "v1" });
                options.DocInclusionPredicate((docName, description) => true);
                options.CustomSchemaIds(type => type.FullName);
            });
    }

    private void ConfigureAutoMapper(ServiceConfigurationContext context)
    {
        context.Services.AddAutoMapperObjectMapper<ModularCrmModule>();
        Configure<AbpAutoMapperOptions>(options =>
        {
            /* Uncomment `validate: true` if you want to enable the Configuration Validation feature.
             * See AutoMapper's documentation to learn what it is:
             * https://docs.automapper.org/en/stable/Configuration-validation.html
             */
            options.AddMaps<ModularCrmModule>(/* validate: true */);
        });
    }

    private void ConfigureCors(ServiceConfigurationContext context, IConfiguration configuration)
    {
        context.Services.AddCors(options =>
        {
            options.AddDefaultPolicy(builder =>
            {
                builder
                    .WithOrigins(
                        configuration["App:CorsOrigins"]?
                            .Split(",", StringSplitOptions.RemoveEmptyEntries)
                            .Select(o => o.RemovePostFix("/"))
                            .ToArray() ?? Array.Empty<string>()
                    )
                    .WithAbpExposedHeaders()
                    .SetIsOriginAllowedToAllowWildcardSubdomains()
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials();
            });
        });
    }

    private void ConfigureDataProtection(ServiceConfigurationContext context)
    {
        context.Services.AddDataProtection().SetApplicationName("ModularCrm");
    }

    private void ConfigureVirtualFiles(IWebHostEnvironment hostingEnvironment)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<ModularCrmModule>();
            if (hostingEnvironment.IsDevelopment())
            {
                /* Using physical files in development, so we don't need to recompile on changes */
                options.FileSets.ReplaceEmbeddedByPhysical<ModularCrmModule>(hostingEnvironment.ContentRootPath);
            }
        });
    }

    private void ConfigureMongoDB(ServiceConfigurationContext context)
    {
        context.Services.AddMongoDbContext<ModularCrmDbContext>(options =>
        {
            options.AddDefaultRepositories();
        });

        context.Services.AddAlwaysDisableUnitOfWorkTransaction();
        Configure<AbpUnitOfWorkDefaultOptions>(options =>
        {
            options.TransactionBehavior = UnitOfWorkTransactionBehavior.Disabled;
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

        app.UseAbpRequestLocalization();

        if (!env.IsDevelopment())
        {
            app.UseErrorPage();
        }

        app.UseCorrelationId();
        app.UseStaticFiles();
        app.UseAbpStudioLink();
        app.UseRouting();
        app.UseAbpSecurityHeaders();
        app.UseCors();
        app.UseAuthentication();
        app.UseAbpOpenIddictValidation();

        if (IsMultiTenant)
        {
            app.UseMultiTenancy();
        }

        app.UseUnitOfWork();
        app.UseDynamicClaims();
        app.UseAuthorization();

        app.UseSwagger();
        app.UseAbpSwaggerUI(options =>
        {
            options.SwaggerEndpoint("/swagger/v1/swagger.json", "ModularCrm API");
            options.OAuthClientId(context.GetConfiguration()["AuthServer:SwaggerClientId"]);
        });

        app.UseAuditing();
        app.UseAbpSerilogEnrichers();
        app.UseConfiguredEndpoints();
    }
}
