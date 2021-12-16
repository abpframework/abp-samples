using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;
using Volo.Abp.Autofac;

namespace StoredProcedureDemo.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(StoredProcedureDemoHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class StoredProcedureDemoConsoleApiClientModule : AbpModule
    {
        
    }
}
