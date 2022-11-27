using Volo.Abp.Modularity;

namespace EfCoreDiDemo;

[DependsOn(
    typeof(EfCoreDiDemoApplicationModule),
    typeof(EfCoreDiDemoDomainTestModule)
    )]
public class EfCoreDiDemoApplicationTestModule : AbpModule
{

}
