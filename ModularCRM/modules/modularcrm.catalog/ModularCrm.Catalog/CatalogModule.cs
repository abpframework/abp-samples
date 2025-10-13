using ModularCrm.Ordering;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;
using Volo.Abp.Application;
using Volo.Abp.EntityFrameworkCore;
using ModularCrm.Catalog.Data;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Mapperly;

namespace ModularCrm.Catalog;

[DependsOn(
    typeof(OrderingContractsModule),
    typeof(CatalogContractsModule),
    typeof(AbpDddApplicationModule),
    typeof(AbpMapperlyModule),
    typeof(AbpAspNetCoreMvcModule),
    typeof(AbpEntityFrameworkCoreModule)
)]
public class CatalogModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<IMvcBuilder>(mvcBuilder =>
        {
            mvcBuilder.AddApplicationPartIfNotExists(typeof(CatalogModule).Assembly);
        });
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddMapperlyObjectMapper<CatalogModule>();
        
        context.Services.AddAbpDbContext<CatalogDbContext>(options =>
        {
            options.AddDefaultRepositories<ICatalogDbContext>(includeAllEntities: true);
            
            /* Add custom repositories here. Example:
             * options.AddRepository<Question, EfCoreQuestionRepository>();
             */
        });

        Configure<AbpAspNetCoreMvcOptions>(options =>
        {
            options.ConventionalControllers.Create(typeof(CatalogModule).Assembly, settings =>
            {
                settings.RootPath = "catalog";
            });
        });
    }
}
