using System.Threading.Tasks;

namespace SignalRDemoBlazorUi.Data;

public interface ISignalRDemoBlazorUiDbSchemaMigrator
{
    Task MigrateAsync();
}
