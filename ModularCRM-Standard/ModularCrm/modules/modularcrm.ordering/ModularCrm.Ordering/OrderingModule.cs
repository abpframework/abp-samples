using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;
using Volo.Abp.EntityFrameworkCore;
using ModularCrm.Ordering.Data;
using Volo.Abp.AspNetCore.Mvc;

namespace ModularCrm.Ordering;

[DependsOn(
    typeof(OrderingContractsModule),
    typeof(AbpDddApplicationModule),
    typeof(AbpAutoMapperModule),
    typeof(AbpAspNetCoreMvcModule),
    typeof(AbpEntityFrameworkCoreModule)
)]
public class OrderingModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAutoMapperObjectMapper<OrderingModule>();
        Configure<AbpAutoMapperOptions>(options =>
        {
            options.AddMaps<OrderingModule>(validate: true);
        });
        
        context.Services.AddAbpDbContext<OrderingDbContext>(options =>
        {
            options.AddDefaultRepositories(includeAllEntities: true);
            
            /* Add custom repositories here. Example:
             * options.AddRepository<Question, EfCoreQuestionRepository>();
             */
        });
    }
}
