using StoredProcedureDemo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace StoredProcedureDemo
{
    [DependsOn(
        typeof(StoredProcedureDemoEntityFrameworkCoreTestModule)
        )]
    public class StoredProcedureDemoDomainTestModule : AbpModule
    {

    }
}