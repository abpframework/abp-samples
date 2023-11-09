using System.Threading.Tasks;

namespace InterceptionSampleMongoApp.Data;

public interface IInterceptionSampleMongoAppDbSchemaMigrator
{
    Task MigrateAsync();
}
