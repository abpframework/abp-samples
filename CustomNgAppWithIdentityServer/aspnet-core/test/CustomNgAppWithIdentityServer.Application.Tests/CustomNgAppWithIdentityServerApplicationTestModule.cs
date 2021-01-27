using Volo.Abp.Modularity;

namespace CustomNgAppWithIdentityServer
{
    [DependsOn(
        typeof(CustomNgAppWithIdentityServerApplicationModule),
        typeof(CustomNgAppWithIdentityServerDomainTestModule)
        )]
    public class CustomNgAppWithIdentityServerApplicationTestModule : AbpModule
    {

    }
}