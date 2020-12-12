using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace DevExpressSample.Data
{
    /* This is used if database provider does't define
     * IDevExpressSampleDbSchemaMigrator implementation.
     */
    public class NullDevExpressSampleDbSchemaMigrator : IDevExpressSampleDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}