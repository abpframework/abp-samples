using TelerikUIExample.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace TelerikUIExample;

[DependsOn(
    typeof(TelerikUIExampleEntityFrameworkCoreTestModule)
    )]
public class TelerikUIExampleDomainTestModule : AbpModule
{

}
