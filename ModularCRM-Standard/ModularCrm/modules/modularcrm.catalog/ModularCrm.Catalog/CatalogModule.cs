using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;
using Volo.Abp.EntityFrameworkCore;
using ModularCrm.Catalog.Data;
using Volo.Abp.AspNetCore.Mvc;

namespace ModularCrm.Catalog;

[DependsOn(
    typeof(CatalogContractsModule),
    typeof(AbpDddApplicationModule),
    typeof(AbpAutoMapperModule),
    typeof(AbpAspNetCoreMvcModule),
    typeof(AbpEntityFrameworkCoreModule)
)]
public class CatalogModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAutoMapperObjectMapper<CatalogModule>();
        Configure<AbpAutoMapperOptions>(options =>
        {
            options.AddMaps<CatalogModule>(validate: true);
        });
        
        context.Services.AddAbpDbContext<CatalogDbContext>(options =>
        {
            options.AddDefaultRepositories(includeAllEntities: true);
            
            /* Add custom repositories here. Example:
             * options.AddRepository<Question, EfCoreQuestionRepository>();
             */
        });
    }
}
