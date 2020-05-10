using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace PostgeSqlDemo.EntityFrameworkCore
{
    [DependsOn(
        typeof(PostgeSqlDemoEntityFrameworkCoreModule)
        )]
    public class PostgeSqlDemoEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<PostgeSqlDemoMigrationsDbContext>();
        }
    }
}
