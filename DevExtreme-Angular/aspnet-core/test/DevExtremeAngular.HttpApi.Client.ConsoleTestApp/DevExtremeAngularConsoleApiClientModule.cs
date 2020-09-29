using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace DevExtremeAngular.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(DevExtremeAngularHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class DevExtremeAngularConsoleApiClientModule : AbpModule
    {
        
    }
}
