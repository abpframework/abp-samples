using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Mapperly;
using Volo.Abp.Modularity;
using Volo.Abp.Application;
using Volo.Abp.EntityFrameworkCore;
using ModularCrm.Ordering.Data;
using Volo.Abp.AspNetCore.Mvc;

namespace ModularCrm.Ordering;

[DependsOn(
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
