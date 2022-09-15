using Volo.Abp.Modularity;

namespace SignInWithoutSpecifyingTenant;

[DependsOn(
    typeof(SignInWithoutSpecifyingTenantApplicationModule),
    typeof(SignInWithoutSpecifyingTenantDomainTestModule)
    )]
public class SignInWithoutSpecifyingTenantApplicationTestModule : AbpModule
{

}
