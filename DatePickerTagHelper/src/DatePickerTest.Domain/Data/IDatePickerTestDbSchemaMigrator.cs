using System.Threading.Tasks;

namespace DatePickerTest.Data;

public interface IDatePickerTestDbSchemaMigrator
{
    Task MigrateAsync();
}
