using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.TenantManagement;
using Volo.Abp.Account;

namespace DashboardDemo
{
    [DependsOn(
        typeof(DashboardDemoDomainSharedModule),
        typeof(AbpFeatureManagementApplicationContractsModule),
        typeof(AbpIdentityApplicationContractsModule),
        typeof(AbpPermissionManagementApplicationContractsModule),
        typeof(AbpAccountApplicationContractsModule),
        typeof(AbpTenantManagementApplicationContractsModule)
    )]
    public class DashboardDemoApplicationContractsModule : AbpModule
    {

    }
}
