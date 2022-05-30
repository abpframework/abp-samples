using ConcurrentLogin.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace ConcurrentLogin;

[DependsOn(
    typeof(ConcurrentLoginEntityFrameworkCoreTestModule)
    )]
public class ConcurrentLoginDomainTestModule : AbpModule
{

}
