using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace ExtendLocalizationResource.EntityFrameworkCore
{
    [DependsOn(
        typeof(ExtendLocalizationResourceEntityFrameworkCoreModule)
        )]
    public class ExtendLocalizationResourceEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<ExtendLocalizationResourceMigrationsDbContext>();
        }
    }
}
