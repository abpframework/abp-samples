using EfCoreDiDemo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace EfCoreDiDemo;

[DependsOn(
    typeof(EfCoreDiDemoEntityFrameworkCoreTestModule)
    )]
public class EfCoreDiDemoDomainTestModule : AbpModule
{

}
