using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace Profiler.Data
{
    /* This is used if database provider does't define
     * IProfilerDbSchemaMigrator implementation.
     */
    public class NullProfilerDbSchemaMigrator : IProfilerDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}