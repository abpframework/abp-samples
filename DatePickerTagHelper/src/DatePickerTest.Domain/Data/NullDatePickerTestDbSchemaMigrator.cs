using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace DatePickerTest.Data;

/* This is used if database provider does't define
 * IDatePickerTestDbSchemaMigrator implementation.
 */
public class NullDatePickerTestDbSchemaMigrator : IDatePickerTestDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
