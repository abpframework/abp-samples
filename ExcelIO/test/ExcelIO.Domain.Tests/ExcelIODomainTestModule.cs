using ExcelIO.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace ExcelIO
{
    [DependsOn(
        typeof(ExcelIOEntityFrameworkCoreTestModule)
        )]
    public class ExcelIODomainTestModule : AbpModule
    {

    }
}