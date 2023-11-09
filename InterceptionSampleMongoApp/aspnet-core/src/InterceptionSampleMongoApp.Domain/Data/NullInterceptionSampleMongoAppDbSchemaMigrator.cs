using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace InterceptionSampleMongoApp.Data;

/* This is used if database provider does't define
 * IInterceptionSampleMongoAppDbSchemaMigrator implementation.
 */
public class NullInterceptionSampleMongoAppDbSchemaMigrator : IInterceptionSampleMongoAppDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
