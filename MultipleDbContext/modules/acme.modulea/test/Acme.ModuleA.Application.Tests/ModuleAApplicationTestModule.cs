using Volo.Abp.Modularity;

namespace Acme.ModuleA;

[DependsOn(
    typeof(ModuleAApplicationModule),
    typeof(ModuleADomainTestModule)
    )]
public class ModuleAApplicationTestModule : AbpModule
{

}
