using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Account;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.TenantManagement;

namespace DevExtremeAngular
{
    [DependsOn(
        typeof(DevExtremeAngularApplicationContractsModule),
        typeof(AbpAccountHttpApiClientModule),
        typeof(AbpIdentityHttpApiClientModule),
        typeof(AbpPermissionManagementHttpApiClientModule),
        typeof(AbpTenantManagementHttpApiClientModule),
        typeof(AbpFeatureManagementHttpApiClientModule)
    )]
    public class DevExtremeAngularHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "Default";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(DevExtremeAngularApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
