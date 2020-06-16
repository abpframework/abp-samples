using CustomApplicationModules.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace CustomApplicationModules
{
    [DependsOn(
        typeof(CustomApplicationModulesEntityFrameworkCoreTestModule)
        )]
    public class CustomApplicationModulesDomainTestModule : AbpModule
    {

    }
}