using Volo.Abp.Modularity;

namespace EShopOnAbp.AdministrationService
{
    [DependsOn(
        typeof(AdministrationServiceApplicationModule),
        typeof(AdministrationServiceDomainTestModule)
        )]
    public class AdministrationServiceApplicationTestModule : AbpModule
    {

    }
}