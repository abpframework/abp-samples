using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;
using Volo.Abp.Autofac;

namespace DashboardDemo.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(DashboardDemoHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class DashboardDemoConsoleApiClientModule : AbpModule
    {
        
    }
}
