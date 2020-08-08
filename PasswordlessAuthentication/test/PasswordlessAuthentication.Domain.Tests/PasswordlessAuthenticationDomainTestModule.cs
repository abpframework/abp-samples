using PasswordlessAuthentication.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace PasswordlessAuthentication
{
    [DependsOn(
        typeof(PasswordlessAuthenticationEntityFrameworkCoreTestModule)
        )]
    public class PasswordlessAuthenticationDomainTestModule : AbpModule
    {

    }
}