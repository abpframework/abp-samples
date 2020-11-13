using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace AngularMaterialUIDemo.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(AngularMaterialUIDemoHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class AngularMaterialUIDemoConsoleApiClientModule : AbpModule
    {
        
    }
}
