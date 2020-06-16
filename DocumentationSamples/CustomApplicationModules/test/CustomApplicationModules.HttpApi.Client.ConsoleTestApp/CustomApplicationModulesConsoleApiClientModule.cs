using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace CustomApplicationModules.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(CustomApplicationModulesHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class CustomApplicationModulesConsoleApiClientModule : AbpModule
    {
        
    }
}
