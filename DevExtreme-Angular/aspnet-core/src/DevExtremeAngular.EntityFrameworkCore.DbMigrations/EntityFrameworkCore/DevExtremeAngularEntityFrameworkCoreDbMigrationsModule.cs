using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace DevExtremeAngular.EntityFrameworkCore
{
    [DependsOn(
        typeof(DevExtremeAngularEntityFrameworkCoreModule)
        )]
    public class DevExtremeAngularEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<DevExtremeAngularMigrationsDbContext>();
        }
    }
}
