using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace ConcurrencyDemo.Data
{
    /* This is used if database provider does't define
     * IConcurrencyDemoDbSchemaMigrator implementation.
     */
    public class NullConcurrencyDemoDbSchemaMigrator : IConcurrencyDemoDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}