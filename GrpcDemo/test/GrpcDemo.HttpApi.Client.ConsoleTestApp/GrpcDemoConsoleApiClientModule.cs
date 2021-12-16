using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;
using Volo.Abp.Autofac;

namespace GrpcDemo.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(GrpcDemoHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class GrpcDemoConsoleApiClientModule : AbpModule
    {
        
    }
}
