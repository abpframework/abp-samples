using System.Threading.Tasks;

namespace PlugInSample.Data;

public interface IPlugInSampleDbSchemaMigrator
{
    Task MigrateAsync();
}
