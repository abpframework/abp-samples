using SignInWithoutSpecifyingTenant.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace SignInWithoutSpecifyingTenant;

[DependsOn(
    typeof(SignInWithoutSpecifyingTenantEntityFrameworkCoreTestModule)
    )]
public class SignInWithoutSpecifyingTenantDomainTestModule : AbpModule
{

}
