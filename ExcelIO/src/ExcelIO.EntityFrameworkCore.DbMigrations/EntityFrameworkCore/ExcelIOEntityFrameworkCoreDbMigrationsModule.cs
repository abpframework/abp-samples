using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace ExcelIO.EntityFrameworkCore
{
    [DependsOn(
        typeof(ExcelIOEntityFrameworkCoreModule)
        )]
    public class ExcelIOEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<ExcelIOMigrationsDbContext>();
        }
    }
}
