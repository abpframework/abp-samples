using EfCoreJSONColumnDemo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace EfCoreJSONColumnDemo;

[DependsOn(
    typeof(EfCoreJSONColumnDemoEntityFrameworkCoreTestModule)
    )]
public class EfCoreJSONColumnDemoDomainTestModule : AbpModule
{

}
