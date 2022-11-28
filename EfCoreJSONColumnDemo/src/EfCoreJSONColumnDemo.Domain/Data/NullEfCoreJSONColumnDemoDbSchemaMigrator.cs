using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace EfCoreJSONColumnDemo.Data;

/* This is used if database provider does't define
 * IEfCoreJSONColumnDemoDbSchemaMigrator implementation.
 */
public class NullEfCoreJSONColumnDemoDbSchemaMigrator : IEfCoreJSONColumnDemoDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
