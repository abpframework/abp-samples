using System.Threading.Tasks;

namespace OutputCachingMiddleware.Data;

public interface IOutputCachingMiddlewareDbSchemaMigrator
{
    Task MigrateAsync();
}
