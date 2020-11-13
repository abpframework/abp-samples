using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace AngularMaterialUIDemo.EntityFrameworkCore
{
    [DependsOn(
        typeof(AngularMaterialUIDemoEntityFrameworkCoreModule)
        )]
    public class AngularMaterialUIDemoEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<AngularMaterialUIDemoMigrationsDbContext>();
        }
    }
}
