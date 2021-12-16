using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;
using Volo.Abp.Autofac;

namespace DevExtremeAngular.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(DevExtremeAngularHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class DevExtremeAngularConsoleApiClientModule : AbpModule
    {
        
    }
}
