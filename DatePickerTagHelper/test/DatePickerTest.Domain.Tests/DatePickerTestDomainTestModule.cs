using DatePickerTest.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace DatePickerTest;

[DependsOn(
    typeof(DatePickerTestEntityFrameworkCoreTestModule)
    )]
public class DatePickerTestDomainTestModule : AbpModule
{

}
