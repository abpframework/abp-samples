using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;
using Volo.Abp.Autofac;

namespace OrganizationUnitSample.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(OrganizationUnitSampleHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class OrganizationUnitSampleConsoleApiClientModule : AbpModule
    {
        
    }
}
