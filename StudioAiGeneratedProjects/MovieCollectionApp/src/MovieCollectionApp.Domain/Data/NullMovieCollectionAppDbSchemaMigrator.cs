using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace MovieCollectionApp.Data;

/* This is used if database provider does't define
 * IMovieCollectionAppDbSchemaMigrator implementation.
 */
public class NullMovieCollectionAppDbSchemaMigrator : IMovieCollectionAppDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
