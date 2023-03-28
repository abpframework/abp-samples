using DatePickerTest.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace DatePickerTest.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(DatePickerTestEntityFrameworkCoreModule),
    typeof(DatePickerTestApplicationContractsModule)
    )]
public class DatePickerTestDbMigratorModule : AbpModule
{

}
