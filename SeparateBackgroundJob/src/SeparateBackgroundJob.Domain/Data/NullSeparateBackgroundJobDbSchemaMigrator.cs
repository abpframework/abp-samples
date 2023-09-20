using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace SeparateBackgroundJob.Data;

/* This is used if database provider does't define
 * ISeparateBackgroundJobDbSchemaMigrator implementation.
 */
public class NullSeparateBackgroundJobDbSchemaMigrator : ISeparateBackgroundJobDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
