using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace Acme.BookStore.AngularMaterial.EntityFrameworkCore
{
    [DependsOn(
        typeof(AngularMaterialEntityFrameworkCoreModule)
        )]
    public class AngularMaterialEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<AngularMaterialMigrationsDbContext>();
        }
    }
}
