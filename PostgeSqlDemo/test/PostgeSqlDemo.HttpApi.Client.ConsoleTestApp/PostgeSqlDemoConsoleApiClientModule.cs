using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace PostgeSqlDemo.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(PostgeSqlDemoHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class PostgeSqlDemoConsoleApiClientModule : AbpModule
    {
        
    }
}
