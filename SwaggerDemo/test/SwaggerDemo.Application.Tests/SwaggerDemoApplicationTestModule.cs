using Volo.Abp.Modularity;

namespace SwaggerDemo;

[DependsOn(
    typeof(SwaggerDemoApplicationModule),
    typeof(SwaggerDemoDomainTestModule)
    )]
public class SwaggerDemoApplicationTestModule : AbpModule
{

}
