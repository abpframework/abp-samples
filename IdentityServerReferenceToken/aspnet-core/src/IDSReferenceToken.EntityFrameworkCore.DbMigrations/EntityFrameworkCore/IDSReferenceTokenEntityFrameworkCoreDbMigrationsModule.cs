using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace IDSReferenceToken.EntityFrameworkCore
{
    [DependsOn(
        typeof(IDSReferenceTokenEntityFrameworkCoreModule)
        )]
    public class IDSReferenceTokenEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<IDSReferenceTokenMigrationsDbContext>();
        }
    }
}
