using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace SignalRDemo.Data
{
    /* This is used if database provider does't define
     * ISignalRDemoDbSchemaMigrator implementation.
     */
    public class NullSignalRDemoDbSchemaMigrator : ISignalRDemoDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}