using Volo.Abp.Modularity;

namespace EfCoreJSONColumnDemo;

[DependsOn(
    typeof(EfCoreJSONColumnDemoApplicationModule),
    typeof(EfCoreJSONColumnDemoDomainTestModule)
    )]
public class EfCoreJSONColumnDemoApplicationTestModule : AbpModule
{

}
