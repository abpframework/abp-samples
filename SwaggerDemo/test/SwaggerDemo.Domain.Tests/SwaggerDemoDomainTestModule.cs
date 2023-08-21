using SwaggerDemo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace SwaggerDemo;

[DependsOn(
    typeof(SwaggerDemoEntityFrameworkCoreTestModule)
    )]
public class SwaggerDemoDomainTestModule : AbpModule
{

}
