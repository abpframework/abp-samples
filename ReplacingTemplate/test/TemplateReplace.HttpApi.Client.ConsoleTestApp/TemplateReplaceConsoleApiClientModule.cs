using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace TemplateReplace.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(TemplateReplaceHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class TemplateReplaceConsoleApiClientModule : AbpModule
    {
        
    }
}
