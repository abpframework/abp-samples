using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;
using Volo.Abp.Autofac;

namespace CustomApplicationModules.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(CustomApplicationModulesHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class CustomApplicationModulesConsoleApiClientModule : AbpModule
    {
        
    }
}
