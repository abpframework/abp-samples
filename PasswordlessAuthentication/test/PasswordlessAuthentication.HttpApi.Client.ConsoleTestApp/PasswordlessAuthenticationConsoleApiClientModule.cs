using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace PasswordlessAuthentication.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(PasswordlessAuthenticationHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class PasswordlessAuthenticationConsoleApiClientModule : AbpModule
    {
        
    }
}
