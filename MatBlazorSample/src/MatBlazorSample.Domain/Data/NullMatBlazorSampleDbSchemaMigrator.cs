using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace MatBlazorSample.Data
{
    /* This is used if database provider does't define
     * IMatBlazorSampleDbSchemaMigrator implementation.
     */
    public class NullMatBlazorSampleDbSchemaMigrator : IMatBlazorSampleDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}