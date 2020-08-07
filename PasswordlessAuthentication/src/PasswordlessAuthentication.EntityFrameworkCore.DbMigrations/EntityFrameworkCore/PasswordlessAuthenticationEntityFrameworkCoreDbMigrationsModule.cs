using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace PasswordlessAuthentication.EntityFrameworkCore
{
    [DependsOn(
        typeof(PasswordlessAuthenticationEntityFrameworkCoreModule)
        )]
    public class PasswordlessAuthenticationEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<PasswordlessAuthenticationMigrationsDbContext>();
        }
    }
}
