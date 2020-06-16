using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace CustomApplicationModules.EntityFrameworkCore
{
    [DependsOn(
        typeof(CustomApplicationModulesEntityFrameworkCoreModule)
        )]
    public class CustomApplicationModulesEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<CustomApplicationModulesMigrationsDbContext>();
        }
    }
}
