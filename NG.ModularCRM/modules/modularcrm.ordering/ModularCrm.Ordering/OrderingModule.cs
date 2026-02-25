using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Mapperly;
using Volo.Abp.Modularity;
using Volo.Abp.Application;
using Volo.Abp.EntityFrameworkCore;
using ModularCrm.Ordering.Data;
using ModularCrm.Catalog;
using Volo.Abp.AspNetCore.Mvc;

namespace ModularCrm.Ordering;

[DependsOn(
    typeof(CatalogContractsModule),
    typeof(OrderingContractsModule),
    typeof(AbpDddApplicationModule),
    typeof(AbpMapperlyModule),
    typeof(AbpAspNetCoreMvcModule),
    typeof(AbpEntityFrameworkCoreModule)
)]
public class OrderingModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<IMvcBuilder>(mvcBuilder =>
        {
            mvcBuilder.AddApplicationPartIfNotExists(typeof(OrderingModule).Assembly);
        });
    }
    
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpAspNetCoreMvcOptions>(options =>
        {
            options.ConventionalControllers.Create(typeof(OrderingModule).Assembly, settings =>
            {
                settings.RootPath = "ordering";
            });
        });

        context.Services.AddMapperlyObjectMapper<OrderingModule>();
        
        context.Services.AddAbpDbContext<OrderingDbContext>(options =>
        {
            options.AddDefaultRepositories<IOrderingDbContext>(includeAllEntities: true);
            
            /* Add custom repositories here. Example:
             * options.AddRepository<Question, EfCoreQuestionRepository>();
             */
        });
    }
}
