using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;
using Volo.Abp.Autofac;

namespace PostgeSqlDemo.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(PostgeSqlDemoHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class PostgeSqlDemoConsoleApiClientModule : AbpModule
    {
        
    }
}
