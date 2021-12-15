using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;
using Volo.Abp.Autofac;

namespace PasswordlessAuthentication.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(PasswordlessAuthenticationHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class PasswordlessAuthenticationConsoleApiClientModule : AbpModule
    {
        
    }
}
