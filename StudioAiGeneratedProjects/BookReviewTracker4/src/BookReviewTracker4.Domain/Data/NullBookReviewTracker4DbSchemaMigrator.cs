using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace BookReviewTracker4.Data;

/* This is used if database provider does't define
 * IBookReviewTracker4DbSchemaMigrator implementation.
 */
public class NullBookReviewTracker4DbSchemaMigrator : IBookReviewTracker4DbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
