using Volo.Abp.Modularity;

namespace StoredProcedureDemo
{
    [DependsOn(
        typeof(StoredProcedureDemoApplicationModule),
        typeof(StoredProcedureDemoDomainTestModule)
        )]
    public class StoredProcedureDemoApplicationTestModule : AbpModule
    {

    }
}