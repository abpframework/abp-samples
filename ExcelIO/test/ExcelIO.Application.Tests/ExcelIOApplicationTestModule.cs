using Volo.Abp.Modularity;

namespace ExcelIO
{
    [DependsOn(
        typeof(ExcelIOApplicationModule),
        typeof(ExcelIODomainTestModule)
        )]
    public class ExcelIOApplicationTestModule : AbpModule
    {

    }
}