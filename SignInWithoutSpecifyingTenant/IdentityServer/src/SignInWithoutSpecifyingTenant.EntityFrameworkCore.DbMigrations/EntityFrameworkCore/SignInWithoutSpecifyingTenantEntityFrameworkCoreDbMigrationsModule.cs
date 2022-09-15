using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace SignInWithoutSpecifyingTenant.EntityFrameworkCore
{
    [DependsOn(
        typeof(SignInWithoutSpecifyingTenantEntityFrameworkCoreModule)
        )]
    public class SignInWithoutSpecifyingTenantEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<SignInWithoutSpecifyingTenantMigrationsDbContext>();
        }
    }
}
