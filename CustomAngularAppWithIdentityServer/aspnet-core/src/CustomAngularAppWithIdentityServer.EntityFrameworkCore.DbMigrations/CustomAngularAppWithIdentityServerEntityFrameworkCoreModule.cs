using CustomAngularAppWithIdentityServer.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace CustomAngularAppWithIdentityServer
{
    [DependsOn(
        typeof(CustomAngularAppWithIdentityServerEntityFrameworkCoreModule)
        )]
    public class CustomAngularAppWithIdentityServerEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<CustomAngularAppWithIdentityServerMigrationsDbContext>();
        }
    }
}
