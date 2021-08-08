using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace OpenIddictDemo.Data
{
    /* This is used if database provider does't define
     * IOpenIddictDemoDbSchemaMigrator implementation.
     */
    public class NullOpenIddictDemoDbSchemaMigrator : IOpenIddictDemoDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}