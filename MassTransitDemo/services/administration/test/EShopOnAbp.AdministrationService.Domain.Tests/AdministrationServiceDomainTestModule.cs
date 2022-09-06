using EShopOnAbp.AdministrationService.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace EShopOnAbp.AdministrationService
{
    [DependsOn(
        typeof(AdministrationServiceEntityFrameworkCoreTestModule)
        )]
    public class AdministrationServiceDomainTestModule : AbpModule
    {

    }
}