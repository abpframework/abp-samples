using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace ProfilerTiered.Data
{
    /* This is used if database provider does't define
     * IProfilerTieredDbSchemaMigrator implementation.
     */
    public class NullProfilerTieredDbSchemaMigrator : IProfilerTieredDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}