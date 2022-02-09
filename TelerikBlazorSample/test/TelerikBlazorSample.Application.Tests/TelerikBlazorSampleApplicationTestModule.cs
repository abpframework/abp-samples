using Volo.Abp.Modularity;

namespace TelerikBlazorSample;

[DependsOn(
    typeof(TelerikBlazorSampleApplicationModule),
    typeof(TelerikBlazorSampleDomainTestModule)
    )]
public class TelerikBlazorSampleApplicationTestModule : AbpModule
{

}
