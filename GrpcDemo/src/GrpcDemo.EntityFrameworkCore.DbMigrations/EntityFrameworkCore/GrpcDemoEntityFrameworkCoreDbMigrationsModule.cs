using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace GrpcDemo.EntityFrameworkCore
{
    [DependsOn(
        typeof(GrpcDemoEntityFrameworkCoreModule)
        )]
    public class GrpcDemoEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<GrpcDemoMigrationsDbContext>();
        }
    }
}
