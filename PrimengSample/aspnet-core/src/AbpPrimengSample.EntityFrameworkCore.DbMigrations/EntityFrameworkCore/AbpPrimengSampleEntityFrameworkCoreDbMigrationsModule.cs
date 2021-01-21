using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace AbpPrimengSample.EntityFrameworkCore
{
    [DependsOn(
        typeof(AbpPrimengSampleEntityFrameworkCoreModule)
        )]
    public class AbpPrimengSampleEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<AbpPrimengSampleMigrationsDbContext>();
        }
    }
}
