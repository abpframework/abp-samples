using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace CustomNgAppWithIdentityServer.EntityFrameworkCore
{
    [DependsOn(
        typeof(CustomNgAppWithIdentityServerEntityFrameworkCoreModule)
    )]
    public class CustomNgAppWithIdentityServerEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<CustomNgAppWithIdentityServerMigrationsDbContext>();
        }
    }
}