using Localization.Resources.AbpUi;
using SyncfusionSample.Localization;
using Volo.Abp.Account;
using Volo.Abp.AuditLogging;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.IdentityServer;
using Volo.Abp.LanguageManagement;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement.HttpApi;
using Volo.Saas.Host;
using Volo.Abp.LeptonTheme;
using Volo.Abp.Localization;
using Volo.Abp.SettingManagement;
using Volo.Abp.TextTemplateManagement;

namespace SyncfusionSample
{
    [DependsOn(
        typeof(SyncfusionSampleApplicationContractsModule),
        typeof(AbpIdentityHttpApiModule),
        typeof(AbpPermissionManagementHttpApiModule),
        typeof(AbpFeatureManagementHttpApiModule),
        typeof(AbpSettingManagementHttpApiModule),
        typeof(AbpAuditLoggingHttpApiModule),
        typeof(AbpIdentityServerHttpApiModule),
        typeof(AbpAccountAdminHttpApiModule),
        typeof(AbpAccountPublicHttpApiModule),
        typeof(LanguageManagementHttpApiModule),
        typeof(SaasHostHttpApiModule),
        typeof(LeptonThemeManagementHttpApiModule),
        typeof(TextTemplateManagementHttpApiModule)
        )]
    public class SyncfusionSampleHttpApiModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            ConfigureLocalization();
        }

        private void ConfigureLocalization()
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<SyncfusionSampleResource>()
                    .AddBaseTypes(
                        typeof(AbpUiResource)
                    );
            });
        }
    }
}
