using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace MatBlazorSample.EntityFrameworkCore
{
    [DependsOn(
        typeof(MatBlazorSampleEntityFrameworkCoreModule)
        )]
    public class MatBlazorSampleEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<MatBlazorSampleMigrationsDbContext>();
        }
    }
}
