using TelerikBlazorSample.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace TelerikBlazorSample;

[DependsOn(
    typeof(TelerikBlazorSampleEntityFrameworkCoreTestModule)
    )]
public class TelerikBlazorSampleDomainTestModule : AbpModule
{

}
