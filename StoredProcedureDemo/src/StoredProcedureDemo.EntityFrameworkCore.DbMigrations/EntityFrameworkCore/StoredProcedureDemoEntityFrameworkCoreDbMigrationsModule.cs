using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace StoredProcedureDemo.EntityFrameworkCore
{
    [DependsOn(
        typeof(StoredProcedureDemoEntityFrameworkCoreModule)
        )]
    public class StoredProcedureDemoEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<StoredProcedureDemoMigrationsDbContext>();
        }
    }
}
