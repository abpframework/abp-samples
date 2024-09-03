using System.Threading.Tasks;

namespace AspirationalAbp.Data;

public interface IAspirationalAbpDbSchemaMigrator
{
    Task MigrateAsync();
}
