using Volo.Abp.Modularity;

namespace ConcurrentLogin;

[DependsOn(
    typeof(ConcurrentLoginApplicationModule),
    typeof(ConcurrentLoginDomainTestModule)
    )]
public class ConcurrentLoginApplicationTestModule : AbpModule
{

}
