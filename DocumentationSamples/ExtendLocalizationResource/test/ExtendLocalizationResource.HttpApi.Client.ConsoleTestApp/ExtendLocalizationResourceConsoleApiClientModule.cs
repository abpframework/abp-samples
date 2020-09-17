using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace ExtendLocalizationResource.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(ExtendLocalizationResourceHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class ExtendLocalizationResourceConsoleApiClientModule : AbpModule
    {
        
    }
}
