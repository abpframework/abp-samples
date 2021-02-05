using Volo.Abp.Modularity;

namespace CustomAngularAppWithIdentityServer
{
    [DependsOn(
        typeof(CustomAngularAppWithIdentityServerApplicationModule),
        typeof(CustomAngularAppWithIdentityServerDomainTestModule)
        )]
    public class CustomAngularAppWithIdentityServerApplicationTestModule : AbpModule
    {

    }
}