using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace TemplateReplace.EntityFrameworkCore
{
    [DependsOn(
        typeof(TemplateReplaceEntityFrameworkCoreModule)
        )]
    public class TemplateReplaceEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<TemplateReplaceMigrationsDbContext>();
        }
    }
}
