using System.Threading.Tasks;

namespace ConcurrentLogin.Data;

public interface IConcurrentLoginDbSchemaMigrator
{
    Task MigrateAsync();
}
