using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace AspirationalAbp.Data;

/* This is used if database provider does't define
 * IAspirationalAbpDbSchemaMigrator implementation.
 */
public class NullAspirationalAbpDbSchemaMigrator : IAspirationalAbpDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
