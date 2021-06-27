using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace UnifiedContextsDemo.Data
{
    /* This is used if database provider does't define
     * IUnifiedContextsDemoDbSchemaMigrator implementation.
     */
    public class NullUnifiedContextsDemoDbSchemaMigrator : IUnifiedContextsDemoDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}