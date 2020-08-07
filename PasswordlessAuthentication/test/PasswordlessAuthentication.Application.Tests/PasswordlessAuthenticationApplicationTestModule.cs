using Volo.Abp.Modularity;

namespace PasswordlessAuthentication
{
    [DependsOn(
        typeof(PasswordlessAuthenticationApplicationModule),
        typeof(PasswordlessAuthenticationDomainTestModule)
        )]
    public class PasswordlessAuthenticationApplicationTestModule : AbpModule
    {

    }
}