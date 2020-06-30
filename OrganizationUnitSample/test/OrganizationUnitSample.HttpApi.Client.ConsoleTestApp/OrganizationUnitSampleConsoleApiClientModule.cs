using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace OrganizationUnitSample.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(OrganizationUnitSampleHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class OrganizationUnitSampleConsoleApiClientModule : AbpModule
    {
        
    }
}
