using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace GrpcDemo.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(GrpcDemoHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class GrpcDemoConsoleApiClientModule : AbpModule
    {
        
    }
}
