using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement.HttpApi;
using Volo.Abp.SettingManagement;

namespace EShopOnAbp.AdministrationService
{
    [DependsOn(
        typeof(AdministrationServiceApplicationContractsModule),
        typeof(AbpPermissionManagementHttpApiModule),
        typeof(AbpSettingManagementHttpApiModule)
        )]
    public class AdministrationServiceHttpApiModule : AbpModule
    {

    }
}
