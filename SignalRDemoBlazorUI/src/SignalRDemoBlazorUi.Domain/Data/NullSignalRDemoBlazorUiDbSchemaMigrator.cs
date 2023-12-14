using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace SignalRDemoBlazorUi.Data;

/* This is used if database provider does't define
 * ISignalRDemoBlazorUiDbSchemaMigrator implementation.
 */
public class NullSignalRDemoBlazorUiDbSchemaMigrator : ISignalRDemoBlazorUiDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
