using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace ConcurrentLogin.Data;

/* This is used if database provider does't define
 * IConcurrentLoginDbSchemaMigrator implementation.
 */
public class NullConcurrentLoginDbSchemaMigrator : IConcurrentLoginDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
