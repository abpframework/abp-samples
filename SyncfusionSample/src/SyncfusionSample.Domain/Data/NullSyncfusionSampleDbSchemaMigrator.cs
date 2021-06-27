using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace SyncfusionSample.Data
{
    /* This is used if database provider does't define
     * ISyncfusionSampleDbSchemaMigrator implementation.
     */
    public class NullSyncfusionSampleDbSchemaMigrator : ISyncfusionSampleDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}