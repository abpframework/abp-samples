using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;
using Volo.Abp.Autofac;

namespace DevExtremeSample.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(DevExtremeSampleHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class DevExtremeSampleConsoleApiClientModule : AbpModule
    {
        
    }
}
