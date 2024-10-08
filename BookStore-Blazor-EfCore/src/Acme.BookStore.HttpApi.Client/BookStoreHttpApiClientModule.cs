using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Account;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.SettingManagement;
using Volo.Abp.VirtualFileSystem;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.AuditLogging;
using Volo.Abp.LanguageManagement;
using Volo.Abp.TextTemplateManagement;
using Volo.Saas.Host;
using Volo.Abp.Gdpr;
using Volo.Abp.OpenIddict;

namespace Acme.BookStore;

[DependsOn(
    typeof(BookStoreApplicationContractsModule),
    typeof(AbpPermissionManagementHttpApiClientModule),
    typeof(AbpFeatureManagementHttpApiClientModule),
    typeof(AbpIdentityHttpApiClientModule),
    typeof(AbpAccountAdminHttpApiClientModule),
    typeof(AbpAccountPublicHttpApiClientModule),
    typeof(SaasHostHttpApiClientModule),
    typeof(AbpAuditLoggingHttpApiClientModule),
    typeof(AbpOpenIddictProHttpApiClientModule),
    typeof(TextTemplateManagementHttpApiClientModule),
    typeof(LanguageManagementHttpApiClientModule),
    typeof(AbpGdprHttpApiClientModule),
    typeof(AbpSettingManagementHttpApiClientModule)
)]
public class BookStoreHttpApiClientModule : AbpModule
{
    public const string RemoteServiceName = "Default";

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddHttpClientProxies(
            typeof(BookStoreApplicationContractsModule).Assembly,
            RemoteServiceName
        );

        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<BookStoreHttpApiClientModule>();
        });
    }
}
