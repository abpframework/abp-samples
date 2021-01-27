using CustomNgAppWithIdentityServer.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace CustomNgAppWithIdentityServer
{
    [DependsOn(
        typeof(CustomNgAppWithIdentityServerEntityFrameworkCoreTestModule)
        )]
    public class CustomNgAppWithIdentityServerDomainTestModule : AbpModule
    {

    }
}