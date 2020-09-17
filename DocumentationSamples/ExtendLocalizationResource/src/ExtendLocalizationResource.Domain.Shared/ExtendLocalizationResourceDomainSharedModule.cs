using ExtendLocalizationResource.Localization;
using Volo.Abp.AuditLogging;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.IdentityServer;
using Volo.Abp.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.SettingManagement;
using Volo.Abp.TenantManagement;
using Volo.Abp.Timing;
using Volo.Abp.Timing.Localization.Resources.AbpTiming;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace ExtendLocalizationResource
{
    [DependsOn(
        typeof(AbpAuditLoggingDomainSharedModule),
        typeof(AbpBackgroundJobsDomainSharedModule),
        typeof(AbpFeatureManagementDomainSharedModule),
        typeof(AbpIdentityDomainSharedModule),
        typeof(AbpIdentityServerDomainSharedModule),
        typeof(AbpPermissionManagementDomainSharedModule),
        typeof(AbpSettingManagementDomainSharedModule),
        typeof(AbpTenantManagementDomainSharedModule),
        typeof(AbpTimingModule)
        )]
    public class ExtendLocalizationResourceDomainSharedModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            ExtendLocalizationResourceGlobalFeatureConfigurator.Configure();
            ExtendLocalizationResourceModuleExtensionConfigurator.Configure();
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<ExtendLocalizationResourceDomainSharedModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<ExtendLocalizationResourceResource>("en")
                    .AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Localization/ExtendLocalizationResource");

                options.Resources
                    .Get<AbpTimingResource>()
                    .AddVirtualJson("/Localization/AbpTiming");

                options.DefaultResourceType = typeof(ExtendLocalizationResourceResource);
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("ExtendLocalizationResource", typeof(ExtendLocalizationResourceResource));
            });
        }
    }
}
