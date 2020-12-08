using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement.HttpApi;
using Volo.Abp.TenantManagement;
using Volo.Abp.Account;

namespace DashboardDemo
{
    [DependsOn(
        typeof(DashboardDemoApplicationContractsModule),
        typeof(AbpIdentityHttpApiModule),
        typeof(AbpAccountHttpApiModule),
        typeof(AbpPermissionManagementHttpApiModule),
        typeof(AbpTenantManagementHttpApiModule),
        typeof(AbpFeatureManagementHttpApiModule)
        )]
    public class DashboardDemoHttpApiModule : AbpModule
    {

    }
}
