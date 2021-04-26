using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Account;
using Volo.Abp.AuditLogging;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.IdentityServer;
using Volo.Abp.LanguageManagement;
using Volo.Abp.LeptonTheme.Management;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.TextTemplateManagement;
using Volo.Abp.SettingManagement;
using Volo.Saas.Host;

namespace SyncfusionSample
{
    [DependsOn(
        typeof(SyncfusionSampleApplicationContractsModule),
        typeof(AbpIdentityHttpApiClientModule),
        typeof(AbpPermissionManagementHttpApiClientModule),
        typeof(AbpFeatureManagementHttpApiClientModule),
        typeof(AbpSettingManagementHttpApiClientModule),
        typeof(SaasHostHttpApiClientModule),
        typeof(AbpAuditLoggingHttpApiClientModule),
        typeof(AbpIdentityServerHttpApiClientModule),
        typeof(AbpAccountAdminHttpApiClientModule),
        typeof(AbpAccountPublicHttpApiClientModule),
        typeof(LanguageManagementHttpApiClientModule),
        typeof(LeptonThemeManagementHttpApiClientModule),
        typeof(TextTemplateManagementHttpApiClientModule)
    )]
    public class SyncfusionSampleHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "Default";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(SyncfusionSampleApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
