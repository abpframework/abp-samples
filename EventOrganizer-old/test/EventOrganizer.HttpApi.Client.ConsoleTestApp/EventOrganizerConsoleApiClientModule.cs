using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace EventOrganizer.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(EventOrganizerHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class EventOrganizerConsoleApiClientModule : AbpModule
    {
        
    }
}
