using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace DevExtremeSample.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(DevExtremeSampleHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class DevExtremeSampleConsoleApiClientModule : AbpModule
    {
        
    }
}
