using Volo.Abp.Modularity;

namespace CustomApplicationModules
{
    [DependsOn(
        typeof(CustomApplicationModulesApplicationModule),
        typeof(CustomApplicationModulesDomainTestModule)
        )]
    public class CustomApplicationModulesApplicationTestModule : AbpModule
    {

    }
}