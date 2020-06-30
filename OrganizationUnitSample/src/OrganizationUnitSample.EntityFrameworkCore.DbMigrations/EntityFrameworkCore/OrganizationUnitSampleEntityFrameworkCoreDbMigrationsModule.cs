using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace OrganizationUnitSample.EntityFrameworkCore
{
    [DependsOn(
        typeof(OrganizationUnitSampleEntityFrameworkCoreModule)
        )]
    public class OrganizationUnitSampleEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<OrganizationUnitSampleMigrationsDbContext>();
        }
    }
}
