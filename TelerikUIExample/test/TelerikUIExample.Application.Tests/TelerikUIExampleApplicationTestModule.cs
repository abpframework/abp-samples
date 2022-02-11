using Volo.Abp.Modularity;

namespace TelerikUIExample;

[DependsOn(
    typeof(TelerikUIExampleApplicationModule),
    typeof(TelerikUIExampleDomainTestModule)
    )]
public class TelerikUIExampleApplicationTestModule : AbpModule
{

}
