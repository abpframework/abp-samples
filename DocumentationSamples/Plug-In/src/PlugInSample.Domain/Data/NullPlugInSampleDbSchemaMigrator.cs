using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace PlugInSample.Data;

/* This is used if database provider does't define
 * IPlugInSampleDbSchemaMigrator implementation.
 */
public class NullPlugInSampleDbSchemaMigrator : IPlugInSampleDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
