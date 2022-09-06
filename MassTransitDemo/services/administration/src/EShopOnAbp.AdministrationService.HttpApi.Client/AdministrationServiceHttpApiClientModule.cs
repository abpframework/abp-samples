using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.SettingManagement;

namespace EShopOnAbp.AdministrationService
{
    [DependsOn(
        typeof(AdministrationServiceApplicationContractsModule),
        typeof(AbpPermissionManagementHttpApiClientModule),
        typeof(AbpSettingManagementHttpApiClientModule)
    )]
    public class AdministrationServiceHttpApiClientModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(AdministrationServiceApplicationContractsModule).Assembly,
                AdministrationServiceRemoteServiceConsts.RemoteServiceName
            );
        }
    }
}
