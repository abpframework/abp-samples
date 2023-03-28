using Volo.Abp.Modularity;

namespace DatePickerTest;

[DependsOn(
    typeof(DatePickerTestApplicationModule),
    typeof(DatePickerTestDomainTestModule)
    )]
public class DatePickerTestApplicationTestModule : AbpModule
{

}
