using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace OutputCachingMiddleware.Data;

/* This is used if database provider does't define
 * IOutputCachingMiddlewareDbSchemaMigrator implementation.
 */
public class NullOutputCachingMiddlewareDbSchemaMigrator : IOutputCachingMiddlewareDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
