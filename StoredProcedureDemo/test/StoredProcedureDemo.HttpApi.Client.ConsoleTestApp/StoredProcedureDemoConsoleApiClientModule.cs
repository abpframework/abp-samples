using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace StoredProcedureDemo.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(StoredProcedureDemoHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class StoredProcedureDemoConsoleApiClientModule : AbpModule
    {
        
    }
}
