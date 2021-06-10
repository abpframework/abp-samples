using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace ElsaDemo.EntityFrameworkCore
{
    [DependsOn(
        typeof(ElsaDemoEntityFrameworkCoreModule)
        )]
    public class ElsaDemoEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<ElsaDemoMigrationsDbContext>();
        }
    }
}
