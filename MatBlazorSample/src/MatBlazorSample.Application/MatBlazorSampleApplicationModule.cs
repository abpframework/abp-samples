using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Volo.Abp.Account;
using Volo.Abp.AuditLogging;
using Volo.Abp.AutoMapper;
using Volo.Abp.Emailing;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.IdentityServer;
using Volo.Abp.LanguageManagement;
using Volo.Abp.LeptonTheme.Management;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.TextTemplateManagement;
using Volo.Saas.Host;

namespace MatBlazorSample
{
    [DependsOn(
        typeof(MatBlazorSampleDomainModule),
        typeof(MatBlazorSampleApplicationContractsModule),
        typeof(AbpIdentityApplicationModule),
        typeof(AbpPermissionManagementApplicationModule),
        typeof(AbpFeatureManagementApplicationModule),
        typeof(SaasHostApplicationModule),
        typeof(AbpAuditLoggingApplicationModule),
        typeof(AbpIdentityServerApplicationModule),
        typeof(AbpAccountPublicApplicationModule),
        typeof(AbpAccountAdminApplicationModule),
        typeof(LanguageManagementApplicationModule),
        typeof(LeptonThemeManagementApplicationModule),
        typeof(TextTemplateManagementApplicationModule)
        )]
    public class MatBlazorSampleApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<MatBlazorSampleApplicationModule>();
            });
        }
    }
}
