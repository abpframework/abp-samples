using CustomAngularAppWithIdentityServer.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace CustomAngularAppWithIdentityServer
{
    [DependsOn(
        typeof(CustomAngularAppWithIdentityServerEntityFrameworkCoreTestModule)
        )]
    public class CustomAngularAppWithIdentityServerDomainTestModule : AbpModule
    {

    }
}