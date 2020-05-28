using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace SignalRTieredDemo.Data
{
    /* This is used if database provider does't define
     * ISignalRTieredDemoDbSchemaMigrator implementation.
     */
    public class NullSignalRTieredDemoDbSchemaMigrator : ISignalRTieredDemoDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}