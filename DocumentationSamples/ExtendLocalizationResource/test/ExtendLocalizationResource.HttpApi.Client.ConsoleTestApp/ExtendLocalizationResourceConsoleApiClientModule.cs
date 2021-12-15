using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;
using Volo.Abp.Autofac;

namespace ExtendLocalizationResource.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(ExtendLocalizationResourceHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class ExtendLocalizationResourceConsoleApiClientModule : AbpModule
    {
        
    }
}
