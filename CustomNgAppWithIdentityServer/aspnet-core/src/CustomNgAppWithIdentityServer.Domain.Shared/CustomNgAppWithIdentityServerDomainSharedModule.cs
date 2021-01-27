using CustomNgAppWithIdentityServer.Localization;
using Volo.Abp.AuditLogging;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.IdentityServer;
using Volo.Abp.LanguageManagement;
using Volo.Abp.LeptonTheme.Management;
using Volo.Abp.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.SettingManagement;
using Volo.Abp.TextTemplateManagement;
using Volo.Abp.VirtualFileSystem;
using Volo.Saas;
using Volo.Abp.BlobStoring.Database;

namespace CustomNgAppWithIdentityServer
{
    [DependsOn(
        typeof(AbpAuditLoggingDomainSharedModule),
        typeof(AbpBackgroundJobsDomainSharedModule),
        typeof(AbpFeatureManagementDomainSharedModule),
        typeof(AbpIdentityDomainSharedModule),
        typeof(AbpIdentityServerDomainSharedModule),
        typeof(AbpPermissionManagementDomainSharedModule),
        typeof(AbpSettingManagementDomainSharedModule),
        typeof(LanguageManagementDomainSharedModule),
        typeof(SaasDomainSharedModule),
        typeof(TextTemplateManagementDomainSharedModule),
        typeof(LeptonThemeManagementDomainSharedModule),
        typeof(BlobStoringDatabaseDomainSharedModule)
        )]
    public class CustomNgAppWithIdentityServerDomainSharedModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            CustomNgAppWithIdentityServerGlobalFeatureConfigurator.Configure();
            CustomNgAppWithIdentityServerModuleExtensionConfigurator.Configure();
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<CustomNgAppWithIdentityServerDomainSharedModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<CustomNgAppWithIdentityServerResource>("en")
                    .AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Localization/CustomNgAppWithIdentityServer");

                options.DefaultResourceType = typeof(CustomNgAppWithIdentityServerResource);
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("CustomNgAppWithIdentityServer", typeof(CustomNgAppWithIdentityServerResource));
            });
        }
    }
}
