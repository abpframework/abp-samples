using System.Threading.Tasks;

namespace TodoApp.Data;

public interface ITodoAppDbSchemaMigrator
{
    Task MigrateAsync();
}
